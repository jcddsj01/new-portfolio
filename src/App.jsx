import BackgroundParticlesEffect from "./Components/BackgroundParticlesEffect.jsx";
import Header from "./Components/Sections/Header.jsx";
import Home from "./Components/Sections/Home.jsx";
import About from "./Components/Sections/About.jsx";
import Skills from "./Components/Sections/Skills.jsx";
import Projects from "./Components/Sections/Projects.jsx";
import Resume from "./Components/Sections/Resume.jsx";
import Contact from "./Components/Sections/Contact.jsx";
import Footer from "./Components/Sections/Footer.jsx";
import BackToTopButton from "./Components/BackToTopButton.jsx";

function App() {
  return (
    <>
      <BackgroundParticlesEffect />
        <Header />
        <Home />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="whatsappContactForm">
          <Contact />
        </section>
        <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
