import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  // Mostra o botão se scrollY > 500
  const handleScroll = () => {
    setVisible(window.scrollY > 500);
  };

  // Scroll suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        cursor-pointer fixed right-6 bottom-8 z-50 w-[50px] h-[45px]
        rounded-[2px_2px_2px_30px] bg-gradient-to-r from-orange-600 to-neutral-800 
        text-gray-50 shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] 
        transition-all duration-300 flex items-center justify-center
        ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
    >
      <ArrowUp />
    </button>
  );
}

export default BackToTopButton;
