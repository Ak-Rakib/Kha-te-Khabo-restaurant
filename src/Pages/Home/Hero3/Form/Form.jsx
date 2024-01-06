import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Form = () => {
  return (
    <>
      {/* <form action="">
        <ul className="bg-yellow-400 p-9 mt-0 mb-8">
          <li className="mb-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <FontAwesomeIcon icon={faUser} />
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
      </form> */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="text-yellow-500 text-2xl">Book a Table</p>
            <h1 className="text-4xl">
              Book Your Table For Private Dinners & Happy Hours
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat provident, consectetur aperiam voluptas nihil officia
              ducimus reprehenderit labore magni quasi delectus, aliquid,
              nesciunt incidunt pariatur sed ab laudantium iste?
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="mobile"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="text"
                  placeholder="Date"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input
                  type="text"
                  placeholder="Time"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  btn-warning btn-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
