import React from "react";
import Typed from "typed.js";
import Img from "../assets/pic2.jpeg";
import Me from "../assets/me.jpg";

const Intro = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer.",
        "Certified Python Lover.",
        "Part-time Gamer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main id="home" className="bg-black p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img src={Img} alt="" className="w-60 rounded md:w-80" />
          </div>
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent">
              Pilla Krishna Satwik
            </h1>
            <h2 className="text-white font-bold text-2xl md:text-3xl mt-4 z-50">
              A <span ref={el} />
            </h2>
            <p className="text-justify text-gray-400 pt-6">
              A passionate programmer and tech enthusiast, I am always
              fascinated by the technologies shaping today's industry. My
              favorite programming language is Python. I enjoy working with
              frontend frameworks like ReactJS, Tailwind CSS, Bootstrap,
              AngularJS, etc. Backend technologies like Flask, NodeJs, MySQL
              also tickle my brain.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT ME Section */}
      <div id="about-me" className="container mx-auto p-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-center">
            <div className="p-0.5 bg-gradient-to-tr from-[#8A2387] to-[#E94057] rounded-full">
              <div class="p-1 bg-black rounded-full">
                <img
                  src={Me}
                  alt=""
                  className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-400 mt-4 text-justify">
              I am{" "}
              <span className="bg-gradient-to-r from-[#8A2387] to-[#E94057] bg-clip-text text-transparent font-bold">
                Pilla Krishna Satwik
              </span>
              , currently pursuing B.Tech in Computer Science and Engineering
              with specialization in Cyber Physical Systems at Vellore Institute
              of Technology, Chennai. I aspire to be a Full Stack Developer with
              a passion for creating intuitive and dynamic user experiences. My
              technical skills span across full-stack development, with a
              particular fondness for Python and modern web frameworks. When I'm
              not coding, you can find me indulging in gaming, hitting the gym
              or catching up on tech trends. My journey is a blend of learning,
              building, and continuous growth, driven by my fascination with the
              ever-evolving world of technology.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
