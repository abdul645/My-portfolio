import style from './App.module.css'
import { About } from './Components/About/About';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";

function App() {
  
  return (
    <>
  
      <ScrollToTop className={style.ScrollToUp} smooth top={500} />
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
