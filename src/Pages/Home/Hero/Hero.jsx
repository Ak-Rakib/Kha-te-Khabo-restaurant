import React from "react";


const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/zRHv7wM/pexels-waldemar-2290070.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-light font-mono ">Kha-te-Khabo</h1>
            <p className="mb-5 font-light">
              The Best Restaurant available now in Chittagong
            </p>
            <p className="mb-5 font-light">
              Book online or call{" "}
              <span className="mbl-num">+88017843*****</span>
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
