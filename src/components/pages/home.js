import React from 'react';
import '../../App.css';
import Card from '../Card';
import Footer from '../footer';
import HeroSection from '../HeroSection';

function Home (){
    return(
        <>
        <HeroSection/>
        <Card/>
        <Footer/>
        </>
    );
}

export default Home;