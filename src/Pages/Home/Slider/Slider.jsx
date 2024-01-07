import React from "react";
import "./Slider.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="max-w-md hero-content text-center">
            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="max-w-md hero-content text-center">
            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="max-w-md hero-content text-center">
            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="max-w-md hero-content text-center">
            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <div className="max-w-md hero-content text-center">
            <button className="btn btn-warning ">Book Now</button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6">
          <div className="max-w-md hero-content text-center">
            <button className="btn btn-warning ">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
