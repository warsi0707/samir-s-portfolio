import Card from "./Card";
import {projects} from "../components/data/Projects.js"

export default function Projects() {
  const data = projects
  return (
    <div id="Projects">
      <h1 className="flex justify-center mb-10 text-4xl font-light text-white md:text-6xl">
        Projects
      </h1>
      <div className="flex flex-col gap-10 justify-center  max-w-[900px] mx-auto ">
        {data && data.map((project,indx)=>(
          <Card key={indx} project={project}/>
        ))}
      </div>
    </div>
  );
}
