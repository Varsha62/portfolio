import './App.css';
import Nav from "./Componant/Nav/Nav";
import Hero from './Componant/Hero/Hero.jsx';
import About from './Componant/About/About.jsx';
import ProjectName from './Componant/ProjectName/Project.jsx';
import Skill from './Componant/Skills/Skill';
import Contact from './Componant/Contact/Contact.jsx';
import Footer from './Componant/Footer/Footer.jsx';


function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <ProjectName/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
