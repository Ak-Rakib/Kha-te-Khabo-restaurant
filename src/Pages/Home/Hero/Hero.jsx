import React from "react";


const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen mb-10"
        style={{
          backgroundImage: "url(https://ibb.co/PhzH98L)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Kha-te-Khabo</h1>
            <p className="mb-5">
              The Best Restaurant available now in Chittagong
            </p>
            <p className="mb-5">
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
