import React, { useState } from "react";
import "./Hero2.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel from "../../../assets/carousel.jpg";
import carousel01 from "../../../assets/carousel01.jpg";
import carousel02 from "../../../assets/carousel02.jpg";
import carousel03 from "../../../assets/carousel03.jpg";
import card01 from "../../../assets/card01.jpg";
import card02 from "../../../assets/card02.jpg";
import { BsFillStarFill } from "react-icons/bs";

const Hero2 = () => {
  const [items, setItems] = useState([
    { id: 1, url: carousel },
    { id: 2, url: carousel01 },
    { id: 3, url: carousel02 },
    { id: 4, url: carousel03 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="section">
      <div className="container">
        <div className="hero2-container">
          <div className="hero2-carousel">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="carousel" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="hero2-content">
            <h2 style={{marginBottom:"0px",marginTop:"0px", paddingBottom: '0px', paddingTop: '0px'}} className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
            </h2>
            <h4 style={{marginTop:"0px", paddingTop: '0px'}}>We hope to see you soon!</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              explicabo iusto ducimus voluptatum quae, quasi libero doloremque
              ipsa minus error nesciunt magni. Recusandae debitis nisi sapiente.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              amet fugiat debitis, similique magni hic nulla obcaecati dolore
              aliquam minus? Quis illum provident perspiciatis nesciunt aliquid
              deserunt, esse rerum quo?
            </p>
            <blockquote>
              Popular Chatgaya hana haite mone hoile taratari arar outletot
              ayjogoy!
            </blockquote>
          </div>
        </div>

        <div className="hero2-card-container">
          <div className="hero2-card hero2-card-left">
            <img src={card01} alt="" className="hero2-card-img" />
            <div className="hero2-card-content">
              <div className="hero2-card-icon">
                <BsFillStarFill color="#c3512f"></BsFillStarFill>
                <h3 className="heading-tertiary">
                  The best <span>ingredients</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                corrupti.
              </p>
            </div>
          </div>

          <div className="hero2-card hero2-card-right">
            <img src={card02} alt="" className="hero2-card-img" />
            <div className="hero2-card-content">
              <div className="hero2-card-icon">
                <BsFillStarFill color="#c3512f"></BsFillStarFill>
                <h3 className="heading-tertiary">
                  The best <span>reservation</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
