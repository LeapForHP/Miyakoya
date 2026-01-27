import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Contact() {
  const { t, i18n } = useTranslation('common');
  const isJapanese = i18n.language === 'ja';
  const isChinese = i18n.language === 'zh';
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    companyName: '',
    post: '',
    phone: '',
    email: '',
    inquiry: ''
  });
  const [isRobot, setIsRobot] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRobot) {
      alert(t('contact.robotAlert'));
      return;
    }

    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.email || !formData.inquiry) {
      alert(t('contact.requiredAlert'));
      return;
    }

    if (formData.inquiry.length > 500) {
      alert(t('contact.charLimitAlert'));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          lastName: '',
          firstName: '',
          companyName: '',
          post: '',
          phone: '',
          email: '',
          inquiry: ''
        });
        setIsRobot(true);
      } else {
        console.error('API Error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('メール送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isJapanese ? 'font-mincho' : isChinese ? 'font-songti' : ''}`}>
      <Header />
      
      <main className="flex-1">
        {/* Contact Form Section */}
        <section 
          className="relative min-h-screen py-16 bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/7a9ce590-4f32-013e-387d-0a58a9feac02/adobe_express_image.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative w-full max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#003561] mb-8 text-center">
                {t('contact.title')}
              </h1>

              <form onSubmit={handleSubmit} data-readdy-form id="contact-form" className="space-y-6">
                {/* Last Name */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.lastName')} <span className="text-red-600 text-sm ml-1">{t('contact.required')}</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors"
                    required
                  />
                </div>

                {/* First Name */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.firstName')} <span className="text-red-600 text-sm ml-1">{t('contact.required')}</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors"
                    required
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.companyName')}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors"
                  />
                </div>

                {/* Post */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.post')}
                  </label>
                  <input
                    type="text"
                    name="post"
                    value={formData.post}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.phone')} <span className="text-red-600 text-sm ml-1">{t('contact.required')}</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.phonePlaceholder')}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.email')} <span className="text-red-600 text-sm ml-1">{t('contact.required')}</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors"
                    required
                  />
                </div>

                {/* Inquiry */}
                <div>
                  <label className="block font-bold text-[#003561] mb-2">
                    {t('contact.inquiry')} <span className="text-red-600 text-sm ml-1">{t('contact.required')}</span>
                  </label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    placeholder={t('contact.inquiryPlaceholder')}
                    rows={5}
                    maxLength={500}
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base text-black outline-none focus:border-[#003561] transition-colors resize-none"
                    required
                  />
                  <p className="text-sm text-gray-600 mt-1">{formData.inquiry.length}/500{t('contact.charCount')}</p>
                </div>

                {/* Captcha */}
                <div className="bg-gray-50 border-2 border-gray-300 rounded p-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!isRobot}
                      onChange={(e) => setIsRobot(!e.target.checked)}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <span className="text-[#003561] font-medium">{t('contact.notRobot')}</span>
                  </label>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 rounded p-4 text-green-700 text-center">
                    {t('contact.successMessage')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 rounded p-4 text-red-700 text-center">
                    {t('contact.errorMessage')}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#003561] text-white px-12 py-3 rounded font-bold text-lg hover:bg-[#004568] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                  </button>
                </div>

                <p className="text-sm text-center text-gray-600 mt-4">
                  {t('contact.privacyNote')}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
