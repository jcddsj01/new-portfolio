import { useI18n } from "../../i18n";
import { Download } from 'lucide-react';

function Resume() {
    const { translate } = useI18n();

    return (
        <section className="mx-[30px] mb-[150px]" id='resume'>
            <h1 className='uppercase rounded-[2px_2px_2px_30px] font-bold text-gray-50 p-4 bg-gradient-to-r from-orange-600 text-lg to-neutral-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)]'>
                {translate("resume.title")}
            </h1>
            <p className='text-lg p-5 mt-8 leading-7 bg-gradient-to-r from-black/30 to-[#252628]/30 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]'>
            {translate("resume.content")}
            </p>

            <div className='flex justify-left items-center'>
                <a className="flex items-center justify-center gap-3 font-semibold uppercase bg-gradient-to-r from-orange-600 text-base to-neutral-800 text-gray-50 cursor-pointer py-3 px-7 mb-7 mt-8 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] transition-all duration-200" href="/resume/resume-jose-carlos.pdf" target="_blank"
  rel="noopener noreferrer" download="resume-jose-carlos">
                {translate("resume.button-download")}
                <Download className="w-5 h-5 flex-shrink-0" />
                </a>
            </div>
        </section>
    )
}

export default Resume;
