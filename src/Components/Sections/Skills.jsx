import { useI18n } from "../../i18n";
import { skillsImages } from '../../assets/skills/skillsImages.js';

function Skills() {
    const { translate } = useI18n();
    
    function LoadSkillImage(skillKey) {
        const image = skillsImages[skillKey]
        return image || null
    }

    const skills = [
        { name: 'HTML5', image: LoadSkillImage('html'),
            link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
        { name: 'CSS3', image: LoadSkillImage('css'),
            link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
        { name: 'TailwindCSS', image: LoadSkillImage('tailwindcss'),
            link: "https://tailwindcss.com/" },
        { name: 'JavaScript', image: LoadSkillImage('javascript'),
            link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
        { name: 'TypeScript', image: LoadSkillImage('typescript'),
            link: "https://www.typescriptlang.org/" },
        { name: 'React', image: LoadSkillImage('react'),
            link: "https://react.dev/" },
        { name: 'NodeJS', image: LoadSkillImage('nodejs'),
            link: "https://nodejs.org/" },
        { name: 'Python', image: LoadSkillImage('python'),
            link: "https://www.python.org/" },
        { name: 'MySQL', image: LoadSkillImage('mysql'),
            link: "https://www.mysql.com/" },
        { name: 'MongoDB', image: LoadSkillImage('mongodb'),
            link: "https://www.mongodb.com/" },
        { name: 'Git', image: LoadSkillImage('git'),
            link: "https://git-scm.com/" },
    ];

    return (
        <section className="mx-[30px] mb-[150px]" id='skills'>
            <h2 className='uppercase rounded-[2px_2px_2px_30px] font-bold text-gray-50 p-4 bg-gradient-to-r from-orange-600 text-lg to-neutral-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)]'>
                {translate("skills.title")}
            </h2>

            <p className='text-lg p-5 mt-8 leading-7 bg-gradient-to-r from-black/30 to-[#252628]/30 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]'>
                {translate("skills.content")}
            </p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mx-auto my-[50px] rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='flex justify-center items-center flex-col gap-3 p-[10px] rounded-xs bg-[#252628]/30 hover:text-orange-600 hover:shadow-[0_0_10px_5px_rgba(255,68,0,0.3)] cursor-pointer'
                    >
                        <a
                            href={skill.link}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='flex justify-center items-center flex-col no-underline w-[70px] h-[60px] cursor-pointer'
                        >
                            <img
                                src={skill.image}
                                className='w-[96px] h-[76px]'
                                alt={`Logo ${skill.name}`}
                            />
                        </a>

                        <p className='text-sm font-bold tracking-widest uppercase text-[#e7e7e7]'>
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
