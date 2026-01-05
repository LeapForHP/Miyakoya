import { useTranslation } from 'react-i18next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Profile() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://cdn.peraichi.com/userData/2f4495ec-fa1a-46a1-b089-229ea1319976/img/4720ab20-4ff2-013e-3636-0a58a9feac02/hiro2382DSCF2565_TP_V4.jpg')" }}
          />
          
          <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-end">
                <div className="w-full md:w-1/2 bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#003561] mb-8 text-center">
                    {t('profile.title')}
                  </h1>
                  
                  <div className="space-y-6 text-[#003561]">
                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.companyName')}</p>
                      <p className="text-base pl-4">{t('profile.companyNameValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.established')}</p>
                      <p className="text-base pl-4">{t('profile.establishedValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.capital')}</p>
                      <p className="text-base pl-4">{t('profile.capitalValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.ceo')}</p>
                      <p className="text-base pl-4">{t('profile.ceoValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.address')}</p>
                      <p className="text-base pl-4">{t('profile.addressValue1')}</p>
                      <p className="text-base pl-4">{t('profile.addressValue2')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.branch')}</p>
                      <p className="text-base pl-4">{t('profile.branchValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.employees')}</p>
                      <p className="text-base pl-4">{t('profile.employeesValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.business')}</p>
                      <p className="text-base pl-4">{t('profile.businessValue')}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium">{t('profile.banks')}</p>
                      <p className="text-base pl-4">{t('profile.banksValue1')}</p>
                      <p className="text-base pl-4">{t('profile.banksValue2')}</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-[#003561]/20">
                      <p className="text-lg font-medium">{t('profile.history')}</p>
                      <div className="space-y-3 pl-4">
                        <div>
                          <p className="font-medium">{t('profile.history1Title')}</p>
                          <p className="text-base pl-4">{t('profile.history1Value')}</p>
                        </div>
                        <div>
                          <p className="font-medium">{t('profile.history2Title')}</p>
                          <p className="text-base pl-4">{t('profile.history2Value')}</p>
                        </div>
                        <div>
                          <p className="font-medium">{t('profile.history3Title')}</p>
                          <p className="text-base pl-4">{t('profile.history3Value')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
