import About from "@/components/About";
import Card from "@/components/Card";
import Education from "@/components/Education";
import Greet from "@/components/Greet";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <>

    <div className="">
    {/* <Navbar/> */}
      <Greet/>
      <About/>
      <Education />

      <div className="mb-20">
        <h1 className='text-3xl mb-5 px-5 md:px-0 text-start'>Skills</h1>
        <Skills/>
      </div>
      <div className="mb-20  text-center"> 
      <div className="mb-10 px-5 sm:px-0 sm:w-[500px] mx-auto">
      <h1 className='text-4xl'>My Projects</h1>
      <p className='text-2xl mb-3'>Check out my latest works</p>
      <p className="text-gray-300 text-lg">I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
      </div>
     
      <Projects/>
      </div>
      
     
  
    </div>
    </>
  );
}
