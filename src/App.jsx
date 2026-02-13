import React from 'react';
import HeroSection from './HomePage/HeroSection/HeroSection';
import Section3 from './HomePage/Section3/Section';
import Section2 from './HomePage/Section2/Section2';
import Section5 from './HomePage/Section5/Section5';
import Section6 from './HomePage/Section6/Section6';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            // cleanup if necessary, though App usually doesn't unmount
            lenis.destroy();
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return (
        <div data-theme="dark">
            <HeroSection />
            <Section2 />
            <Section5 />
            <Section6 />
            <Section3 />
        </div>
    );
}

export default App;
