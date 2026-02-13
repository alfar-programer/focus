import React from 'react';
import Section3 from './HomePage/Section3/Section';
import Section2 from './HomePage/Section2/Section2';
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
        <>
            <Section2 />
            <Section3 />
        </>
    );
}

export default App;
