import { lazy } from "react";
const Greet = lazy(()=> import("./Greet"))
const About = lazy(()=> import("./About"))
const ContactPage = lazy(()=> import("./ContactPage"))
const Education = lazy(()=> import("./Education"))
const Projects = lazy(()=> import("./Projects"))
const Technology = lazy(()=> import("./Technology"))

export default function Dashboard(){
    return (
        <div className="pb-20 min-h-screen bg-gradient-to-br from-[#054c76] via-[#0c192a] to-[#471c3a]">
        <Greet />
        <About />
        <Technology />
        <Education />
        <Projects />
        <ContactPage/>
      </div>
    )
}