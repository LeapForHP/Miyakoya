import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[#003561] text-white">
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="#top" className="hover:underline cursor-pointer">
              {t('nav.top')}
            </a>
            <span className="text-white/50">|</span>
            <a href="https://9trn5.hp.peraichi.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
              {t('nav.onlineStore')}
            </a>
            <span className="text-white/50">|</span>
            <a href="https://32n4m.hp.peraichi.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
              {t('nav.contact')}
            </a>
            <span className="text-white/50">|</span>
            <a href="https://0ef9f.hp.peraichi.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
              {t('nav.wechat')}
            </a>
          </nav>
          <div className="text-center text-sm">
            <p>{t('footer.copyright')}</p>
            <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors mt-2 inline-block cursor-pointer">
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
