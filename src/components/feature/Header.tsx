import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const languages = [
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <header className="bg-[#003561] text-white sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">〜北海道 小樽〜都や</h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="/" className="px-4 py-2 hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
                {t('nav.top')}
              </a>
              <span className="text-white/50">|</span>
              <a href="/profile" className="px-4 py-2 hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
                {t('nav.profile')}
              </a>
              <span className="text-white/50">|</span>
              <a href="/contact" className="px-4 py-2 hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
                {t('nav.contact')}
              </a>
            </nav>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-global-line text-lg"></i>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <i className={`ri-arrow-down-s-line transition-transform ${isLangOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer ${
                          i18n.language === lang.code ? 'bg-blue-50 text-[#003561] font-medium' : 'text-gray-700'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded transition-colors cursor-pointer"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col gap-2">
              <a href="/" className="px-4 py-3 hover:bg-white/10 rounded transition-colors cursor-pointer">
                {t('nav.top')}
              </a>
              <a href="/profile" className="px-4 py-3 hover:bg-white/10 rounded transition-colors cursor-pointer">
                {t('nav.profile')}
              </a>
              <a href="/contact" className="px-4 py-3 hover:bg-white/10 rounded transition-colors cursor-pointer">
                {t('nav.contact')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
