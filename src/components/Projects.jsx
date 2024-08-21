import React from "react";
import Yv from "../assets/Yv.png";
import Rh2 from "../assets/Rh2.png";
import Ts from "../assets/Ts.png";
import Ca from "../assets/Ca.png";

const Projects = () => {
  return (
    <main className="bg-black" id="projects">
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h2 className="p-1 text-4xl font-bold bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent">
            Some of my Projects
          </h2>
        </div>
        <div className="text-gray-400 p-6">
          <ul>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
              <div className="order-2 md:order-1">
                <li className="pb-2">
                  <span className="bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent font-bold">
                    Recipe Hunt
                  </span>
                  - A Recipe webapp built using ReactJs and mealDB API where we
                  can search for a recipe, discover various cuisines, or just
                  browse a random recipe.
                </li>
              </div>
              <img
                src={Rh2}
                alt="Recipe Hunt"
                width={400}
                height={200}
                className="rounded order-1 md:order-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
              <img
                src={Yv}
                alt="YVdownloader"
                width={400}
                height={200}
                className="rounded order-1"
              />
              <li className="pb-2 order-2">
                <span className="bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent font-bold">
                  YVdownloader
                </span>{" "}
                - A youtube video downloader website built using HTML, CSS,
                Python and FastApi where we can paste the link of the youtube
                video and download it in one click.
              </li>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
              <div className="order-2 md:order-1">
                <li className="pb-2">
                  <span className="bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent font-bold">
                    Task Scheduling app
                  </span>
                  - Created a FLASK app with basic CRUD applications and good UI
                  where we can add, remove or modify a task at our own will.
                </li>
              </div>
              <img
                src={Ts}
                alt="Task Scheduling app"
                width={400}
                height={200}
                className="rounded order-1 md:order-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
              <img
                src={Ca}
                alt="Simple Chat Application"
                width={400}
                height={200}
                className="rounded order-1"
              />
              <li className="pb-2 order-2">
                <span className="bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent font-bold">
                  Simple Chat Application
                </span>
                - Built a simple online web chat application using Flask,
                socketIO and Javascript.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Projects;
