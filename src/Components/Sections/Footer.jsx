import { useI18n } from "../../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const { translate } = useI18n();

    const contactLinks = [
        {
            name: "Github",
            href: "https://github.com/jcddsj01",
            icon: faGithub,
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/jose-carlos-703821254/",
            icon: faLinkedin,
        },
        {
            name: "E-mail",
            href: "mailto:jcddsj01@outlook.com",
            icon: faEnvelope,
        },
    ];

    return (
        <footer className="flex justify-center items-center gap-3 flex-col w-full pt-6 pb-8 px-6 uppercase text-center bg-gradient-to-r from-black/50 to-[#252628]/30 text-gray-50 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">

            <h1 className='font-semibold'>
                &copy;{" "}{translate("footer.title")}
            </h1>

            <h2 className='font-bold text-orange-600'>{translate("footer.sub-title")}:</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {contactLinks.map((link, index) => (
                    <div
                        key={index}
                        className='flex justify-center items-center bg-gradient-to-r from-orange-600 text-base to-neutral-800 py-2 px-6 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] transition-all duration-200'
                    >
                        <a
                            className='flex gap-4 cursor-pointer'
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={link.icon} size='xl' className='flex-shrink-0' />
                            <span className='font-medium text-gray-50'>{link.name}</span>
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
