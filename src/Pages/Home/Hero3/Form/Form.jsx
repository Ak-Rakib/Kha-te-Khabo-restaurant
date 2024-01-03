import React from "react";

const Form = () => {
  return (
    <>
      <form action="">
        <ul className="bg-yellow-400 p-9 mt-0 mb-8">
          <li className="mb-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </li>
          <li className="mb-2">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </li>
          <li className="mb-2">
            <input
              type="text"
              placeholder="mobile"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </li>
          <li className="mb-2">
            <input
              type="text"
              placeholder="Date"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </li>
          <li className="mb-2">
            <input
              type="text"
              placeholder="Time"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </li>
          <input className="btn" type="submit" value="submit" />
        </ul>
      </form>
    </>
  );
};

export default Form;
