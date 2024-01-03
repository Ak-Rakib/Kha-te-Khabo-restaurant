import React from 'react';
import Hero from './Hero/Hero';
import Hero2 from './Hero2/Hero2';
import Hero3 from './Hero3/Hero3';

const Home = () => {
    return (
        <div className='pr-4 pl-4'>
            <Hero></Hero>
            <Hero3></Hero3>
            <Hero2></Hero2>
        </div>
    );
};

export default Home;