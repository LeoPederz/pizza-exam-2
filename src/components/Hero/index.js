import React from 'react';
import Navbar from '../Navbar';
import {HeroContainer,
     HeroContent, 
     HeroItems, 
     HeroH1, 
     HeroP, 
     HeroBtn 
    } from './HeroElements';

const Hero = () => {
    return (
       <HeroContainer>
           <Navbar/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Greatest pizza in the world</HeroH1>
                   <HeroP> Ready in 60 seconds</HeroP>
                   <HeroBtn>Place your order here</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>

    );
};

export default Hero;