import { useI18n } from "../../i18n";

function About() {
    const { translate } = useI18n();

    return (
      <section className="mx-[30px] mb-[150px]" id="about">
        <h2 className="uppercase rounded-[2px_2px_2px_30px] font-bold text-gray-50 p-4 bg-gradient-to-r from-orange-600 text-lg to-neutral-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
          {translate("about.title")}
        </h2>
        <p className="text-lg p-5 mt-8 leading-7 bg-gradient-to-r from-black/30 to-[#252628]/30 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
        {translate("about.content")}{" "}
          {/* <span className="uppercase font-bold text-orange-600 text-lg">
            
          </span> */}
        </p>
      </section>
    );
  }
  
  export default About;
  