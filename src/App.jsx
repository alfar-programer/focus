import React, { useEffect, useState } from 'react';
import HeroSection from './HomePage/HeroSection/HeroSection';
import Section3 from './HomePage/Section3/Section';
import Section2 from './HomePage/Section2/Section2';
import Section5 from './HomePage/Section5/Section5';
import Section6 from './HomePage/Section6/Section6';
import Section7 from './HomePage/Section7/Section7';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [resourcesLoaded, setResourcesLoaded] = useState({
        images: false,
        fonts: false,
        scripts: false,
        components: false
    });

    // Track image loading
    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
            setResourcesLoaded(prev => ({ ...prev, images: true }));
            return;
        }

        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        setResourcesLoaded(prev => ({ ...prev, images: true }));
                    }
                });
                img.addEventListener('error', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        setResourcesLoaded(prev => ({ ...prev, images: true }));
                    }
                });
            }
        });

        if (loadedImages === totalImages) {
            setResourcesLoaded(prev => ({ ...prev, images: true }));
        }
    }, []);

    // Track font loading
    useEffect(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => {
                setResourcesLoaded(prev => ({ ...prev, fonts: true }));
            });
        } else {
            // Fallback if fonts API not available
            setTimeout(() => {
                setResourcesLoaded(prev => ({ ...prev, fonts: true }));
            }, 1000);
        }
    }, []);

    // Simulate script/component loading progress
    useEffect(() => {
        const scriptTimer = setTimeout(() => {
            setResourcesLoaded(prev => ({ ...prev, scripts: true }));
        }, 500);

        const componentTimer = setTimeout(() => {
            setResourcesLoaded(prev => ({ ...prev, components: true }));
        }, 800);

        return () => {
            clearTimeout(scriptTimer);
            clearTimeout(componentTimer);
        };
    }, []);

    // Calculate overall progress
    useEffect(() => {
        const stages = Object.values(resourcesLoaded);
        const completedStages = stages.filter(Boolean).length;
        const totalStages = stages.length;
        
        let targetProgress = (completedStages / totalStages) * 100;
        
        // Force 100% when all stages complete
        if (completedStages === totalStages) {
            targetProgress = 100;
        }
        
        // Smooth progress animation
        const currentProgress = progress;
        const diff = targetProgress - currentProgress;
        
        if (Math.abs(diff) > 0.1) {
            const increment = diff * 0.15;
            const newProgress = currentProgress + increment;
            
            const timer = setTimeout(() => {
                setProgress(newProgress);
            }, 30);
            
            return () => clearTimeout(timer);
        } else if (targetProgress === 100 && progress < 100) {
            // Snap to 100% when close enough
            setProgress(100);
        }
    }, [resourcesLoaded, progress]);

    // Check if all resources are loaded
    useEffect(() => {
        const allLoaded = Object.values(resourcesLoaded).every(Boolean);
        if (allLoaded && progress >= 100) {
            // Give a small delay to show 100% before hiding
            const hideTimer = setTimeout(() => {
                setIsLoading(false);
            }, 500);
            return () => clearTimeout(hideTimer);
        }
    }, [resourcesLoaded, progress]);

    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return (
        <div data-theme="light" className="app-container">
            <LoadingScreen progress={progress} isLoading={isLoading} />
            <Navbar />
            <HeroSection />
            <Section2 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section3 />
            <Footer />
        </div>
    );
}

export default App;
