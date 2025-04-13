import { useState } from "react";
import { Languages } from "lucide-react";
import FlagLanguageBrazil from "../../assets/languages-flags/portuguese-brazil.png";
import FlagLanguageEnglish from "../../assets/languages-flags/english.png";
import { useI18n } from "../../i18n";

export default function Header() {
  const {language, translate, setLanguage} = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const languageOptions = [
    {
      id: "portuguese",
      label: "Português",
      flag: FlagLanguageBrazil,
      alt: "PT",
    },
    {
      id: "english",
      label: "English",
      flag: FlagLanguageEnglish,
      alt: "EN",
    },
  ];

  const navigationLabels = [
    {
      id: "about",
      label: translate("header.about"),
    },
    {
      id: "skills",
      label: translate("header.skills"),
    },
    {
      id: "projects",
      label: translate("header.projects"),
    },
    {
      id: "resume",
      label: translate("header.resume"),
    }
  ]

  return (
    <header className={`flex w-full justify-center items-center bg-black/50 shadow-[0_2px_5px_rgba(0,0,0,0.3)] text-gray-50 relative transition-all duration-300 ${isMenuOpen ? "h-screen" : "h-20"}`}>
      <nav className="">
        <button
          onClick={toggleMenu}
          className={`absolute sm:hidden z-50 top-8 right-8 flex flex-col justify-center items-center transition-all duration-300 ease-in-out
            ${isMenuOpen ? "gap-[4px]" : "gap-[6px]"}`}
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}
            `}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out
              ${isMenuOpen ? "opacity-0" : ""}
            `}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}
            `}
          />
        </button>

        <ul className={`flex flex-col gap-4 sm:flex sm:flex-row sm:gap-6 uppercase cursor-pointer items-center transition-all duration-300 ${isMenuOpen ? "flex" : "hidden sm:flex"}`}>
          {navigationLabels.map((item) => (
            <li key={item.id} className="relative group">
            <a className="text-gray-50 group-hover:text-orange-600 transition-colors duration-300" href={`#${item.id}`} rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} >{item.label}</a>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

            <li className="">
              <section id="languages" className="mt-2 sm:mt-0 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Languages className="w-5 h-5 text-gray-50" />

                <div className={`flex w-auto justify-center items-center ${language === "portuguese" ? "bg-[#20ba34]" : "bg-[#ff091e]"}
                shadow-[0px_5px_10px_0px_rgba(0,0,0,0.75)] py-1 pl-1 pr-0 rounded-full transition-colors duration-300`}>
                  {languageOptions.map((item, index) => (
                    <label key={index} htmlFor={item.id} className="cursor-pointer relative">
                      <input
                        type="radio"
                        id={item.id}
                        name="language"
                        value={item.id}
                        className="sr-only peer"
                        onChange={() => setLanguage(item.id)}
                      />
                      <div className={`
                        w-8 h-8 p-1 bg-white/90 rounded-full flex items-center justify-center 
                        absolute top-0 left-0
                        ${language === item.id ? 'opacity-100 z-10 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.75)] hover:bg-white' : 'opacity-0 z-0'}
                        peer-checked:opacity-100 peer-checked:z-10
                      `}>
                        <img src={item.flag} alt={item.alt} className="w-full h-full object-contain" />
                      </div>
                      <div className="w-9 h-8" />
                    </label>
                  ))}
                </div>
                {language && (
                  <span className="absolute sm:relative text-gray-50 mt-28 sm:mt-0 text-xs">
                    {languageOptions.find((item) => item.id === language)?.alt}
                  </span>
                )}
              </section>
          </li>
        </ul>
      </nav>
    </header>
  );
}
