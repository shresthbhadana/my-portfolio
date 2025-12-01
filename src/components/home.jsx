import React ,{useEffect} from 'react'
import pdf from  "../pdf/shresth2_resume(1).pdf"
import hero from "./data/home.json"
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Typed from 'typed.js';
import Aos from 'aos';

const Home = () => {
  const typedRef = React.useRef(null);
  useEffect(()=>{
    const options= {
      strings:["Welcome to my profile","Hi ,I am Shresth Bhadana", "I am a MERN stack developer"],
      typeSpeed : 50,
      backSpeed : 50,
      loop : true
    }
    const typed = new Typed(typedRef.current,options)  

    return()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
      <section id="home" className="container home">
        <div className="left"  data-aos="fade-up-right" data-aos-duration="1500">
          <h1>
    <span ref={typedRef}></span>
  </h1>
          <a href={pdf} download="resume" className='btn btn-outline-warning'>download resume</a>
        </div>
        <div className="right" data-aos="fade-down-left" data-aos-duration="1500">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </section>

     
     

      <section id="skills" className="container skills">
        <Skills/>
      </section>
<section id="projects" className="container contact">
  <Project/>
</section>
<br />
<br />
      <section id="contact" className="container contact">
       
       
        <Contact/>
      
      </section>
    </>
  )
}

export default Home