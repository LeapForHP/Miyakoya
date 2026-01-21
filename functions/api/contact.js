export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*', // ローカル開発用に緩和
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Parse request body
    const formData = await request.json();
    const { lastName, firstName, companyName, post, phone, email, inquiry } = formData;

    // Validate required fields
    if (!lastName || !firstName || !phone || !email || !inquiry) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // SendGrid API configuration
    const SENDGRID_API_KEY = env.SENDGRID_API_KEY;
    const TO_EMAIL = env.TO_EMAIL || 'info@leaders-co.jp'; // デフォルト送信先
    const TO_EMAIL_2 = env.TO_EMAIL_2; // 2つ目の送信先（オプション）
    const TO_EMAIL_3 = env.TO_EMAIL_3; // 3つ目の送信先（オプション）
    const TO_EMAIL_4 = env.TO_EMAIL_4; // 4つ目の送信先（オプション）
    
    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return new Response(
        JSON.stringify({ error: 'SendGrid API key not configured' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Prepare email recipients
    const recipients = [{ email: TO_EMAIL }];
    if (TO_EMAIL_2) {
      recipients.push({ email: TO_EMAIL_2 });
    }
    if (TO_EMAIL_3) {
      recipients.push({ email: TO_EMAIL_3 });
    }
    if (TO_EMAIL_4) {
      recipients.push({ email: TO_EMAIL_4 });
    }

    // Email content
    const emailContent = {
      personalizations: [
        {
          to: recipients,
          subject: `お問い合わせ: ${lastName} ${firstName}様より`
        }
      ],
      from: {
        email: 'kotoe.takeda@leaders-co.jp',
        name: '都や お問い合わせシステム'
      },
      content: [
        {
          type: 'text/html',
          value: `
            <h2>新しいお問い合わせが届きました</h2>
            <table border="1" cellpadding="10" cellspacing="0">
              <tr><th>項目</th><th>内容</th></tr>
              <tr><td>氏名</td><td>${lastName} ${firstName}</td></tr>
              <tr><td>会社名</td><td>${companyName || '未記入'}</td></tr>
              <tr><td>役職</td><td>${post || '未記入'}</td></tr>
              <tr><td>電話番号</td><td>${phone}</td></tr>
              <tr><td>メールアドレス</td><td>${email}</td></tr>
              <tr><td>お問い合わせ内容</td><td>${inquiry}</td></tr>
            </table>
            <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
          `
        }
      ]
    };

    // Send email via SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailContent),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }), 
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    } else {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: errorText }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

  } catch (error) {
    console.error('Function error:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }), 
      { 
        status: 500, 
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json' 
        }
      }
    );
  }
}