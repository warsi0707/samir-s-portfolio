import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <>
      <div id="Education" className="mb-10 px-5 md:px-0 max-w-[900px] pt-32 mx-auto min-h-[80vh] flex flex-col gap-16">
        <h1 className="flex justify-center text-4xl font-light text-white md:text-6xl">
          Education
        </h1>
        <div className="flex flex-col gap-10">
          <EducationCard name={"Full Stack Web Development"} organ={"100xDevs"} from={"2024(Oct)"} to={"2025(Feb)"} logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU2aCVnu3rCRvKtL1LWauCHcX1oK6wUmfgw&s"}/>
          <EducationCard name={"Bachelor Of Technology"} organ={"AKTU "} from={"2021"} to={"2024"} logo={"https://gimgs2.nohat.cc/thumb/f/640/aktu-logo-dr-a-p-j-abdul-kalam-technical-university--m2i8d3H7b1m2d3N4.jpg"}/>
          <EducationCard name={"Diploma In Engineering"} organ={"Integral University"} from={"2019"} to={"2021"} logo={"https://upload.wikimedia.org/wikipedia/en/8/86/Integral_University%2C_Lucknow_logo.png"}/>
        </div>
      </div>
    </>
  );
}
