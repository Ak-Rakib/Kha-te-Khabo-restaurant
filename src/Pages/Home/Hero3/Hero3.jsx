import React from "react";
import Form from "./Form/Form";

const Hero3 = () => {
  return (
    <div className="flex-none mb-2 md:flex place-content-evenly mt-3 items-center">
      <div className="w-96 mb-4">
        <p className="text-yellow-500 text-2xl">Book a Table</p>
        <h1 className="text-4xl">Book Your Table For Private Dinners & Happy Hours</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          repellat provident, consectetur aperiam voluptas nihil officia ducimus
          reprehenderit labore magni quasi delectus, aliquid, nesciunt incidunt
          pariatur sed ab laudantium iste?
        </p>
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default Hero3;
