import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({ progress, isLoading }) => {
    const containerRef = useRef(null);
    const progressBarRef = useRef(null);
    const progressTextRef = useRef(null);
    const particlesCanvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);

    // Initialize and animate particles
    useEffect(() => {
        const canvas = particlesCanvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.init();
            }
            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5;
            }
            update() {
                const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.01;
                const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.01;

                this.x += this.speedX + (offsetX * this.size);
                this.y += this.speedY + (offsetY * this.size);

                if (this.x < 0 || this.x > canvas.width) this.init();
                if (this.y < 0 || this.y > canvas.height) this.init();
            }
            draw() {
                ctx.fillStyle = `rgba(37, 140, 244, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const createParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < 60; i++) {
                particlesRef.current.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesRef.current.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();

        const handleResize = () => {
            resize();
            createParticles();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [mousePosition]);

    // Mouse movement handler
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Update progress bar
    useEffect(() => {
        if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress}%`;
        }
    }, [progress]);

    // Exit animation
    useEffect(() => {
        if (!isLoading && containerRef.current) {
            gsap.to(containerRef.current, {
                opacity: 0,
                y: -50,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    if (containerRef.current) {
                        containerRef.current.style.display = 'none';
                    }
                }
            });
        }
    }, [isLoading]);

    return (
        <div ref={containerRef} className="loading-screen-container">
            {/* Grain Overlay */}
            <div className="loading-grain-overlay" />
            
            {/* Particle Canvas */}
            <canvas ref={particlesCanvasRef} className="loading-particle-canvas" />
            
            {/* Main Loader Container */}
            <main className="loading-main">
                {/* Calibration Graphics */}
                <div className="loading-calibration-container">
                    {/* Outer Rotating Calibration Marks */}
                    <svg className="loading-rotating-marks" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" fill="none" r="48" stroke="white" strokeDasharray="1 4" strokeWidth="0.2" />
                        <circle cx="50" cy="50" fill="none" r="45" stroke="#06B6D4" strokeDasharray="0.5 15" strokeWidth="0.5" />
                    </svg>
                    
                    {/* Pulsing Focus Ring */}
                    <div className="loading-calibration-ring">
                        {/* Inner Micro-UI Dots */}
                        <div className="loading-inner-dots">
                            <div className="loading-dot-line loading-dot-line-1" />
                            <div className="loading-dot-line loading-dot-line-2" />
                        </div>
                    </div>
                    
                    {/* Center Text Component */}
                    <div className="loading-text-center">
                        <h1 className="loading-focus-text">FOCUS</h1>
                        <p className="loading-subtitle">Technical Calibration TC-v2</p>
                    </div>
                </div>
                
                {/* Progress Indicator */}
                <div className="loading-progress-container">
                    <div className="loading-progress-header">
                        <span>System Initialize</span>
                        <span ref={progressTextRef}>{Math.floor(progress)}%</span>
                    </div>
                    <div className="loading-progress-bar-bg">
                        <div ref={progressBarRef} className="loading-progress-bar-fill" />
                    </div>
                    <div className="loading-pulse-dots">
                        <div className="loading-pulse-dot loading-pulse-dot-1" />
                        <div className="loading-pulse-dot loading-pulse-dot-2" />
                        <div className="loading-pulse-dot loading-pulse-dot-3" />
                    </div>
                </div>
            </main>
            
            {/* UI Decorations */}
            <div className="loading-decoration loading-decoration-left">
                Coordinate Lock: 40.7128° N, 74.0060° W
            </div>
            <div className="loading-decoration loading-decoration-right">
                Precision Series // 2024
            </div>
        </div>
    );
};

export default LoadingScreen;
