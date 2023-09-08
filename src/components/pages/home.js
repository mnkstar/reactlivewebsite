import React from 'react';
import '../../App.css';
import HeroSections from '../HeroSections';
import Card from '../Card';
import Footer from '../footer';

function Home (){
    return(
        <>
        <HeroSections/>
        <Card/>
        <Footer/>
        </>
    );
}

export default Home;