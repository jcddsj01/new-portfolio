import logoPerfil from '../../assets/profile/logo.png';
import { CodeXml } from 'lucide-react';
import { useI18n } from "../../i18n";

function Home() {
  const { translate } = useI18n();

  return (
    <section className="flex justify-center items-center flex-col mt-16 mb-32">
      <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full shadow-[0_10px_20px_rgba(0,0,0,1)] animate-[profile-float_5s_ease-in-out_infinite]">
        <img
          src={logoPerfil}
          alt="Foto de perfil"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h1 className="text-lg font-medium text-gray-50 mt-4 mb-1 uppercase">
        {translate("home.greeting")} <span className='font-bold text-orange-600 text-xl'>{translate("home.developer")}</span>
      </h1>
      <div className="inline-flex items-center justify-center gap-2">
        <p className="text-2xl text-gray-50">
          {translate("home.job")}
        </p>
        <CodeXml className="w-6 h-6 flex-shrink-0 text-orange-600" />
      </div>
      <a
        className="flex items-center justify-center gap-2 text-gray-50 text-base uppercase font-semibold cursor-pointer rounded-[2px_2px_2px_30px] py-[10px] px-[64px] mt-4 bg-gradient-to-r from-orange-600 to-neutral-800 hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.3)] transition-all duration-200"
        href="#whatsappContactForm"
      >
        {translate("home.contact")}
      </a>
    </section>
  );
}

export default Home;
