"use client";
import React from "react";
import Card from "./Card";
export default function Projects() {
  return (
    <div id="project">
      <h1 className="flex justify-center mb-10 text-4xl font-light text-white md:text-6xl">
        Projects
      </h1>
      <div className="flex flex-col gap-10 justify-center  max-w-[900px] mx-auto ">
         <Card
          title={"Homie"}
          image={"/homie.png"}
          about={
            "A fullstack nextjs real estate management app where user, admin and agent will signin using email, google and github. Agent manage the listing and inquiry and also user can contact the agent for query"
          }
          Nextjs={"Nextjs"}
          tailwind={"Tailwind"}
          PostgreSql={"PostgreSql"}
          Prisma={"Prisma"}
          Motion={"Motion"}
          links={"https://homie-xi.vercel.app"}
        />
        <Card
          title={"Rent A Car"}
          image={"/carrent.png"}
          about={
            "Built a car booking platform where users can rent cars on a daily basis. - Integrated secure authentication using Next Auth and dynamic pricing based on rental dates."
          }
          Nextjs={"Nextjs"}
          tailwind={"Tailwind"}
          PostgreSql={"PostgreSql"}
          Prisma={"Prisma"}
          Motion={"Motion"}
          links={"https://car-rental-virid-phi.vercel.app"}
        />
        <Card
          title={"Airbnb"}
          image={"/airbnb.png"}
          about={
            "A full-stack web app built with React, Tailwind CSS, Express, Mongoose, and JWT. Users can log in, book listings, leave reviews, and publish their own listings as owners. Features secure authentication, responsive design, and seamless booking functionality"
          }
          links={"https://airbnb-2-eram.onrender.com/"}
          react={"react"}
          mongoDB={"MongoDB"}
          express={"Express"}
          tailwind={"tailwind"}
          jwt={"JWT"}
        />
        <Card
          title={"Brainly"}
          image={"/brainly.png"}
          about={
            "A second brain that store your daily basis links like your tweets, youtube links and your daily text that rember you"
          }
          react={"react"}
          mongoDB={"mongoDB"}
          express={"Express"}
          tailwind={"tailwind"}
          links={"https://brainly-0ui5.onrender.com"}
        />
        {/* <Card
          title={"E-Cart"}
          image={"/e-cart.png"}
          about={
            "A full-stack web app built with React, Tailwind CSS, Express, Mongoose, and JWT etc. The e-cart is the place where user can buy a product with there adresses and also update there all details  "
          }
          links={"https://e-cart-t963.onrender.com"}
          react={"react"}
          mongoDB={"MongoDB"}
          express={"Express"}
          tailwind={"tailwind"}
          jwt={"JWT"}
        /> */}
        <Card
          title={"Payment App"}
          image={"/payment.png"}
          about={
            "A platform where any one can send or receive money from friends "
          }
          react={"react"}
          mongoDB={"mongoDB"}
          express={"Express"}
          tailwind={"tailwind"}
          links={"https://payment-app-onxi.onrender.com"}
        />
        <Card
          title={"100xDevs"}
          image={"/100xdevs.png"}
          about={"100xDevs pltform that sell course"}
          react={"react"}
          mongoDB={"mongoDB"}
          express={"Express"}
          tailwind={"tailwind"}
          links={"https://one00xdevs-1fe.onrender.com/"}
        />
        
      </div>
    </div>
  );
}
