import React from "react";
import Py from "../assets/python.png";
import Java from "../assets/java.png";
import Cpp from "../assets/c++.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/JS.png";
import Rc from "../assets/react.png";
import Tw from "../assets/Tailwind CSS.svg";
import Boot from "../assets/boot.svg";
import Ang from "../assets/angular.png";
import Flask from "../assets/flask.png";
import Sql from "../assets/sql.png";
import Njs from "../assets/nodejs.svg";
import Sb from "../assets/sb.png";

const Skills = () => {
  return (
    <main className="bg-black">
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h2 className="p-1 text-4xl font-bold bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="flex flex-wrap gap-8 p-6 justify-center">
            <img src={Py} alt="" width={50} height={40} />
            <img src={Java} alt="" width={50} height={40} />
            <img src={Cpp} alt="" width={50} height={40} />
            <img src={Html} alt="" width={50} height={40} />
            <img src={Css} alt="" width={50} height={40} />
            <img src={Tw} alt="" width={50} height={40} />
            <img src={Boot} alt="" width={50} height={40} />
            <img src={Js} alt="" width={50} height={40} />
            <img src={Rc} alt="" width={50} height={40} />
            <img src={Ang} alt="" width={50} height={40} />
            <img
              src={Flask}
              alt=""
              width={50}
              height={40}
              className="rounded-full"
            />
            <img src={Sql} alt="" width={50} height={40} />
            <img src={Njs} alt="" width={50} height={40} />
            <img src={Sb} alt="" width={50} height={40} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
