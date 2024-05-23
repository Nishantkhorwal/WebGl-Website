// FluidSimulation.js
import React, { useEffect, useRef } from 'react';
import { default as createWebGLFluid } from 'webgl-fluid';

const FluidSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.error('Canvas element not found.');
      return;
    }

    try {
      const config = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: false,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
      };

      const fluid = createWebGLFluid(canvas, config);

      if (!fluid) {
        console.error('Failed to create WebGL fluid simulation.');
        return;
      }

      const { update, splat } = fluid;

      if (!update || !splat) {
        console.error('WebGL fluid simulation methods are undefined.');
        return;
      }

      // Function to handle mouse movement
      const handleMouseMove = (e) => {
        const boundingRect = canvas.getBoundingClientRect();
        const mouseX = (e.clientX - boundingRect.left) / canvas.width;
        const mouseY = 1.0 - (e.clientY - boundingRect.top) / canvas.height;
        splat(mouseX, mouseY, 0, 0, [Math.random(), Math.random(), Math.random()]); // Splat random color at mouse position
      };

      // Add event listener for mouse movement
      canvas.addEventListener('mousemove', handleMouseMove);

      let animationFrameId;

      const render = () => {
        update();
        animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
        cancelAnimationFrame(animationFrameId);
        // Clean up event listener on unmount
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    } catch (error) {
      console.error('Error initializing WebGL fluid simulation:', error);
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default FluidSimulation;





