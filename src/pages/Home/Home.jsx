import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import HeroSection from './HeroSection/HeroSection';
import CardSection from './CardSection/CardSection';
import ContainerSection from './ContainerSection/ContainerSection';
import SecondContainer from './SecondContainer/SecondContainer';
import ArduinoSection from './ArduinoSection/ArduinoSection';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <CardSection />
            <ContainerSection />
            <SecondContainer />
            <ArduinoSection />
            <Gallery />
        </div >
    );
}
