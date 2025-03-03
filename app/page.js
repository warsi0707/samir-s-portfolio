import About from "@/components/About";
import Card from "@/components/Card";
import Education from "@/components/Education";
import Greet from "@/components/Greet";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Navbar/>
      <Greet/>
      <About/>
      
      <div className="mb-20">
        <h1 className='text-3xl mb-5 px-5 md:px-0 text-start'>Education</h1>
        <Education link={"https://gimgs2.nohat.cc/thumb/f/640/aktu-logo-dr-a-p-j-abdul-kalam-technical-university--m2i8d3H7b1m2d3N4.jpg"} university={"Abdul kalam Technical University"} degree={"B-Tech"} year={"2021-2024"}/>
        <Education link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6IM0yR1F4hqDLjR_stGXLU5HhNpc4bL00Q&s"} university={"Integral Univeristy"} degree={"Diploma"} year={"2019-2021"}/>
      </div>
      <div className="mb-20">
        <h1 className='text-3xl mb-5 px-5 md:px-0 text-start'>Skills</h1>
        <Skills/>
      </div>
      <div className="mb-20  text-center"> 
      <div className="mb-10 w-[500px] mx-auto">
      <h1 className='text-4xl'>My Projects</h1>
      <p className='text-2xl mb-3'>Check out my latest works</p>
      <p className="text-gray-300 text-lg">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
      </div>
     
      <Projects/>
      </div>
      
     
  
    </div>
  );
}
