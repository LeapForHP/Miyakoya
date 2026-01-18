import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function WeChat() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative" style={{
        backgroundImage: 'url(/images/wechat-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">
              {t('wechat.mainTitle')}
            </h1>
            
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <img 
                src="/images/wechat-qr.jpg" 
                alt="WeChat QR Code" 
                className="w-80 h-80 mx-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}