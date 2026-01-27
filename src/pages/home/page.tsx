import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);
  const isJapanese = i18n.language === 'ja';
  const isChinese = i18n.language === 'zh';

  // Scroll animation setup
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const slides = [
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/263f4ed0-4ff5-013e-36c8-0a58a9feac02/PK-PAUI9805_TP_V4.jpg',
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/4720ab20-4ff2-013e-3636-0a58a9feac02/hiro2382DSCF2565_TP_V4.jpg',
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/50f7bc70-4ff2-013e-363a-0a58a9feac02/YAMAhokkaido001_TP_V4.jpg',
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/10570c40-74f2-013e-24e7-0a58a9feac02/IMG_4421.jpeg',
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/0204ef10-74f2-013e-24e5-0a58a9feac02/IMG_4420.jpeg',
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/3d4773d0-4ff2-013e-3633-0a58a9feac02/C785_hizashitomildseven_TP_V4.jpg',
    'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/37d5f550-4ff2-013e-3630-0a58a9feac02/1711162AMEMAN004_TP_V4 (1).jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`min-h-screen bg-[#003561] ${isJapanese ? 'font-mincho' : isChinese ? 'font-songti' : ''}`}>
      <Header />

      {/* Hero Section */}
      <section id="top" className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center text-white py-12 md:py-16" style={{
        backgroundImage: 'url(https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/681cf5a0-7cb0-013e-d257-0a58a9feac02/IMG_2882.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('hero.title2')}<br />
            {t('hero.title3')}
          </h1>
        </div>
      </section>

      {/* Factory Section */}
      <section className="relative min-h-[700px] flex items-center justify-center text-white" style={{
        backgroundImage: 'url(https://cdn.peraichi.com/template_files/library/landscape_jpg/-mNvCsNlsSE/original.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full mx-auto px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center leading-relaxed scroll-animate">
              {t('intro.title1')}<br />
              {t('intro.title2')}
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
              <div className="flex-shrink-0 scroll-animate">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src="/images/factory.jpg"
                    alt="Factory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 max-w-xl scroll-animate">
                <p className="text-lg md:text-xl leading-relaxed">
                  {t('intro.desc3')}<br />
                  {t('intro.desc4')}<br /><br />
                  {t('intro.desc5')}<br />
                  {t('intro.desc6')}<br /><br />
                  {t('intro.desc7')}<br />
                  {t('intro.desc8')}<br /><br />
                  {t('intro.desc9')}<br />
                  {t('intro.desc10')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line text-2xl text-[#003561]"></i>
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors cursor-pointer">
              <i className="ri-arrow-right-s-line text-2xl text-[#003561]"></i>
            </button>
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    currentSlide === index ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Shop Section */}
      <section className="relative min-h-[400px] flex items-center justify-center text-white" style={{
        backgroundImage: 'url(https://cdn.peraichi.com/template_files/library/landscape_jpg/-mNvCsNlsSE/original.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('shop.title')}</h2>
          <p className="text-2xl mb-8">{t('shop.comingSoon')}</p>
          {/* <a href="https://9trn5.hp.peraichi.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#003561] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            {t('shop.button')}
          </a> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#003d5c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4 scroll-animate">{t('faq.title')}</h2>
          <p className="text-center text-white mb-12 scroll-animate">{t('faq.subtitle')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex flex-col items-center scroll-animate">
                <div className="bg-[#3d9fe8] rounded-2xl p-6 mb-4 relative">
                  <div className="absolute -bottom-2 right-8 flex gap-1">
                    <div className="w-3 h-3 bg-[#3d9fe8] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#3d9fe8] rounded-full"></div>
                  </div>
                  <p className="text-white text-base leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-lg">Q</span> {t(`faq.q${num}`)}<br /><br />
                    <span className="font-bold text-lg text-red-400">A</span> {t(`faq.a${num}`)}
                  </p>
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={num === 1 ? 'https://cdn.peraichi.com/template_files/library/landscape_jpg/4M-5WBrG5-c/original.jpg' :
                         num === 2 ? 'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/13b6c860-4f81-013e-0014-0a58a9feac02/paku1220par568010583_TP_V4 (1).jpg' :
                         num === 3 ? 'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/5dbe4490-4f36-013e-396e-0a58a9feac02/file.jpg' :
                         'https://cdn.peraichi.com/template_files/library/pakutaso/pakutaso_072/original.jpg'}
                    alt={`FAQ ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-16 px-6 bg-[#003561]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 scroll-animate">{t('preparation.title')}</h2>
          <div className="space-y-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex gap-6 items-start bg-white/5 p-6 rounded-lg scroll-animate">
                <div className="flex-shrink-0 w-20 h-20">
                  <img 
                    src={num === 1 ? 'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/718ddf50-50cf-013e-7f00-0a58a9feac02/adobe_express_image.png' :
                         num === 2 ? 'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/4618ba00-50ce-013e-0e21-0a58a9feac02/adobe_express_image.png' :
                         num === 3 ? 'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/54f6e090-50d3-013e-6f28-0a58a9feac02/adobe_express_image.png' :
                         'https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/5b4cd700-50e5-013e-03cf-0a58a9feac02/adobe_express_image.png'} 
                    alt={`Step ${num}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-white">
                  <h3 className="text-2xl font-bold mb-3">{t(`preparation.step${num}Title`)}</h3>
                  <p className="text-lg leading-relaxed">
                    {num === 1 ? (
                      <>
                        {t('preparation.step1Desc1')}<br />
                        {t('preparation.step1Desc2')}
                      </>
                    ) : (
                      t(`preparation.step${num}Desc`)
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="relative min-h-[700px] flex items-center text-gray-800" style={{
        backgroundImage: 'url(https://cdn.peraichi.com/template_files/library/landscape_jpg/-mNvCsNlsSE/original.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 scroll-animate">{t('knowledge.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center scroll-animate">
              <div className="w-80 h-60 rounded-full overflow-hidden">
                <img
                  src="/images/sea-cucumber-knowledge.png"
                  alt="Sea Cucumber"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-4">
                {t('knowledge.heading1')}<br />
                {t('knowledge.heading2')}
              </h3>
              <p className="text-xl font-bold mb-4">
                {t('knowledge.desc1')}<br />
                {t('knowledge.desc2')}<br />
                {t('knowledge.desc3')}
              </p>
              <p className="text-lg font-bold mb-4 leading-relaxed">
                {t('knowledge.desc4')}
              </p>
              <p className="text-lg font-bold mb-4">
                {t('knowledge.desc5')}<br />
                {t('knowledge.desc6')}
              </p>
              <p className="text-lg font-bold leading-relaxed">
                {t('knowledge.desc7')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6 bg-[#003561]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 scroll-animate">{t('news.title')}</h2>
          <div className="bg-white/5 rounded-lg overflow-hidden scroll-animate">
            <div className="border-b border-white/10 p-6 flex gap-6">
              <div className="font-bold text-white whitespace-nowrap">{t('news.date1')}</div>
              <div className="text-white">{t('news.content1')}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
