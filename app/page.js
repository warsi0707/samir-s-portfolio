import About from "@/components/About";
import Card from "@/components/Card";
import Education from "@/components/Education";
import Greet from "@/components/Greet";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technology from "@/components/Technology";


export default function Home() {
  return (
    <>
      <div className="pb-20">
        <Greet />
        <About />
        <Technology />
        <Education />
        <Projects />
      </div>
    </>
  );
}
