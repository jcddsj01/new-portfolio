import { useI18n } from "../../i18n";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projectImages } from '../../assets/projects/projectsImages.js';

function Projects() {
    const { translate } = useI18n();
    const [currentProject, setCurrentProject] = useState(0);

    // Essa função busca a imagem no objeto projectImages
  function LoadProjectImage(imageKey) {
    const image = projectImages[imageKey];
    return image || null;
  }

  // Lista de projetos com as chaves das imagens
  const projects = [
    {
      image: LoadProjectImage('icode-box'),
      link: "https://github.com/jcddsj01/app-icode-box"
    },
    {
      image: LoadProjectImage('calculo-do-imc'),
      link: "https://github.com/jcddsj01/calculo-imc"
    },
    {
      image: LoadProjectImage('calculadora-de-juros-compostos'),
      link: "https://github.com/jcddsj01/calculadora-juros-compostos"
    },
    {
      image: LoadProjectImage('previsao-do-tempo'),
      link: "https://github.com/jcddsj01/previsao-tempo"
    },
    {
      image: LoadProjectImage('conversor-de-moedas'),
      link: "https://github.com/jcddsj01/conversor-moedas"
    },
    {
      image: LoadProjectImage('formulario-com-validacao'),
      link: "https://github.com/jcddsj01/formulario-com-validacao"
    },
    {
      image: LoadProjectImage('lista-de-tarefas'),
      link: "https://github.com/jcddsj01/lista-de-tarefas"
    },
    {
      image: LoadProjectImage('encurtador-de-link'),
      link: "https://github.com/jcddsj01/encurtador-link"
    },
    {
      image: LoadProjectImage('barber-dev'),
      link: "https://github.com/jcddsj01/barber-dev"
    },
    {
      image: LoadProjectImage('indecor'),
      link: "https://github.com/jcddsj01/landing-page-indecor"
    },
    {
      image: LoadProjectImage('it-solutions'),
      link: "https://github.com/jcddsj01/site-it-solutions"
    },
    {
      image: LoadProjectImage('gerenciador-de-financas'),
      link: "https://github.com/jcddsj01/gerenciador-financas"
    },
  ];

    // Função para avançar para o próximo projeto
    const nextProject = () => {
        setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <section className="mx-[30px] mb-[150px]" id="projects">
            <div>
                <h2 className="uppercase rounded-[2px_2px_2px_30px] font-bold text-gray-50 p-4 bg-gradient-to-r from-orange-600 text-lg to-neutral-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                    {translate("projects.title")}
                </h2>
                <p className="text-lg p-5 mt-8 mb-15 leading-7 bg-gradient-to-r from-black/30 to-[#252628]/30 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
                {translate("projects.content")}
                </p>
            </div>

            <div className="relative">
                <div className="container mx-auto my-14 px-4 py-8 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]">

                    <div className="flex justify-center">
                        <span className="text-gray-50 font-bold bg-gradient-to-r from-orange-600 to-neutral-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)] py-2 px-4 rounded-[2px]">
                                {currentProject + 1} / {projects.length}
                        </span>
                    </div>
                    
                    <div className="flex justify-center items-center mb-8">
                        <button onClick={prevProject} className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-12 h-14 bg-gradient-to-r from-orange-600 to-neutral-800 hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] shadow-md rounded-[2px_2px_2px_30px] transition-all duration-200 cursor-pointer" aria-label="Projeto anterior">
                            <ChevronLeft className="text-gray-50 text-xl" />
                        </button>
                        
                        <button onClick={nextProject} className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-12 h-14 bg-gradient-to-r from-orange-600 to-neutral-800 hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] shadow-md rounded-[2px_2px_30px_2px] transition-all duration-200 cursor-pointer" aria-label="Projeto anterior">
                            <ChevronRight className="text-gray-50 text-xl" />
                        </button>
                    </div>

                    <div className="relative h-full overflow-hidden rounded-[2px] shadow-lg bg-gradient-to-r bg-[#252628]/30 text-gray-50">
                        <div className="flex flex-col md:flex-row transition-all duration-500 ease-in-out">
                            <div className="md:w-1/2 h-64 md:h-full overflow-hidden">
                                <img
                                    src={projects[currentProject].image}
                                    alt={projects[currentProject].title}
                                    className="w-full h-[320px] object-cover object-top"
                                />
                            </div>

                            <div className="md:w-1/2 p-8 flex flex-col items-center">
                                <h3 className="text-xl font-bold text-orange-600 mb-2 uppercase">
                                    {translate(`projects.descriptions.${currentProject + 1}.title`)}
                                </h3>
                                <p className="mb-2 text-justify">
                                    {translate(`projects.descriptions.${currentProject + 1}.text`)}
                                </p>
                                <a href={projects[currentProject].link} target="_blank" className="flex items-center justify-center gap-2 text-gray-50 text-base w-full md:w-1/2 uppercase font-semibold cursor-pointer rounded-[2px_2px_2px_30px] py-[10px] px-[64px] mt-4 bg-gradient-to-r from-orange-600 to-neutral-800 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.3) transition-all duration-200">
                                    {translate("projects.button-access")}
                                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 flex-shrink-0" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 gap-2">
                        {projects.map((_, index) => (
                            <button key={index} onClick={() => setCurrentProject(index)} className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-orange-600' : 'bg-gray-50'}`} aria-label="{`Ir para projeto ${index + 1}`}"></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
