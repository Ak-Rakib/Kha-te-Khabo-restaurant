import React from "react";
import "./Hero.css"


const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen mb-0 pb-0"
        style={{
          backgroundImage: "url(https://i.ibb.co/zRHv7wM/pexels-waldemar-2290070.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-light font-mono">KHA<span className="text-yellow-500">-Te-</span>KHABO</h1>
            <p className="font-light">
              The Best Restaurant available now in Chittagong
            </p>
            <p className="mb-2 font-light">
              Book online or call{" "}
              <span className="mbl-num">+88017843*****</span>
            </p>
            <button className="btn btn-warning btn-outline">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
