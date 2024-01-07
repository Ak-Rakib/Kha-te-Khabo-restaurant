import React, { useState } from "react";
import "./Hero2.css";

const Hero2 = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 md:pr-9 pl-9">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-2xl text-yellow-500">About Us</h1>
            <h1 className="text-5xl font-bold text-gray-500">Cooking Since 1990</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <img
            src="https://i.ibb.co/k1d8xbY/pexels-andrea-piacquadio-3779659.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Hero2;
