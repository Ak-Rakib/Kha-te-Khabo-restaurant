import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-img container'>
            <div className="hero-content">
                <h1 className="heading-primary">
                    <span>Welcome</span> To <span className='restaurant'>Kha-te-Khabo</span>
                </h1>
                <p className='text-white'>
                    The Best Restaurant  available now in Chittagong
                </p>
                <p className='text-white'>
                    Book online or call <span className='mbl-num'>+88017843*****</span>
                </p>
            </div>
        </div>
    );
};

export default Hero;