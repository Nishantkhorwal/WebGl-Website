import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';

const ParticlesComponent = () => {
    const particlesInit = useCallback((main) => {
        console.log('Particles initialized:', main);
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log('Particles container loaded:', container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000", // Background color
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "trail",
                        },
                        resize: true,
                    },
                    modes: {
                        trail: {
                            delay: 0.1,
                            quantity: 5,
                            particles: {
                                color: {
                                    value: "#ff0000", // Bright red for visibility
                                },
                                opacity: {
                                    value: 1,
                                    random: false,
                                },
                                size: {
                                    value: 10, // Larger size for visibility
                                    random: false,
                                },
                                move: {
                                    speed: 5,
                                    direction: "none",
                                    outModes: {
                                        default: "out",
                                    },
                                },
                            },
                        },
                    },
                },
                particles: {
                    number: {
                        value: 50, // Start with some particles
                    },
                    color: {
                        value: "#ffffff", // White particles
                    },
                    shape: {
                        type: "circle", // Circle shape
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                    },
                    size: {
                        value: 5, // Medium size
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 2, // Movement speed
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComponent;




