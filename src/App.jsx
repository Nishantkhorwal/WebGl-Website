import React from 'react';
import ParticlesComponent from './components/ParticlesComponent';
import FluidSimulation from './components/FluidSimulation';
import './App.css';
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
    return (
      < >
        <div className='bg-black relative h-full w-full '>
        <FluidSimulation />
        <div className='relative z-10'>
        <div className='flex md:justify-between md:px-10 lg:px-44 lg:py-20 py-10'>
          <img src='MotionArtEffect-logo.png' ></img>
          <button className='px-12 py-3 bg-white hover:bg-transparent border border-white rounded-md text-lg hidden md:block' >Purchase Now</button>

        </div> 
        <div className='flex lg:px-48 md:px-12  py-10 flex-col md:flex-row text-center md:text-start'>
          <div className='md:w-[30%] w-full  lg:text-start'>
             <h4 className='text-md text-center lg:text-2xl bg-gradient-to-r  from-orange-600 via-blue-800 to-blue-800 text-transparent bg-clip-text inline-block font-semibold'>Transform </h4><br/>
             <h4 className='text-md text-center lg:text-2xl bg-gradient-to-r  from-orange-600 via-blue-800 to-blue-800 text-transparent bg-clip-text inline-block font-semibold lg:mb-6 mb-2' >Your Website</h4>
             <h4 className='text-white text-md  lg:text-2xl'>With Motion Art </h4>
             <h4 className='text-white text-md  lg:text-2xl mb-10 lg:mb-0'>Effect</h4>
          </div>
          <div className='md:w-[70%] w-full'>
            <span className=' text-3xl lg:text-7xl  font-semibold text-white ' >
            <h1 className='mb-4'>Attract Your</h1> <h1 className='mb-4'>Visitors Attention</h1> <h1 className='mb-4'>With Colorful</h1> <h1 className='mb-10 bg-gradient-to-r  from-orange-600 via-blue-800 to-blue-800 text-transparent bg-clip-text inline-block '>Motion Art Effect</h1>
            </span>
            <p className='text-slate-300 lg:ms-2 text-sm lg:text-md md:pe-[50px] '>Unleash the power of creativity with Motion Art for Elementor - your<br className='hidden lg:block'/> ultimate solution for seamlessly integrating captivating animations into<br className='hidden lg:block'/> your website. </p>

          </div>

        </div>
        <div className='py-20'>
          <h1 className='md:text-center text-lg ms-3 lg:ms-0 md:text-3xl text-slate-300 mb-20'>Trusted by thousands of users around the world</h1>
          <div className='flex flex-col lg:flex-row md:flex-wrap md:flex-row md:justify-around lg:justify-evenly px-8 lg:px-0'>
            <div className='flex  mb-12 lg:mb-0'> 
            <img src='motionarteffect-img2.png' className='me-4'></img>
            <div className='flex flex-col py-4'>
              <img src='motionarteffect-img4.png' className='mb-4'></img>
              <h4 className='text-white'>4.5 Score,9 Reviews</h4>

            </div>
            </div>
            <div className='flex mb-12 lg:mb-0'> 
            <img src='motionarteffect-img1.png' className='me-4'></img>
            <div className='flex flex-col py-4'>
              <img src='motionarteffect-img4.png' className='mb-4'></img>
              <h4 className='text-white'>4.5 Score,9 Reviews</h4>

            </div>
            </div>
            <div className='flex mb-12 lg:mb-0'> 
            <img src='motionarteffect-img3.png' className='me-4'></img>
            <div className='flex flex-col py-4'>
              <img src='motionarteffect-img4.png' className='mb-4'></img>
              <h4 className='text-white'>4.5 Score,9 Reviews</h4>

            </div>
            </div>
          </div>

        </div>
        <div className='flex lg:flex-row flex-col px-6 lg:px-28 justify-center items-center'>
          <div className='lg:w-[70%] mb-20 lg:mb-0'>
          <h1 className='text-white lg:text-5xl md:text-3xl text-xl mb-10'>
          Turn Your Cursor Into A Colorful<br className='hidden lg:block'/> Magic Wand & Charm Your Visitors
          </h1>
          <p className='text-white text-sm md:text-lg lg:text-lg mb-10'>
          Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse<br className='hidden mb-10 lg:block'/> your website with visually stunning motion art elements.
          </p>
          <div className='px-12 py-3 w-fit flex justify-center rounded-2xl text-sm lg:text-xl md:text-lg font-medium text-white  bg-gradient-to-l  from-orange-600 via-blue-800 to-blue-800'><h1 className='text-white'>Purshase From Envato</h1><FaArrowRightLong className='text-white font-medium ms-3 text-xl items-center self-center'/></div>
          </div>
          <img src='motionarteffect-img5.png' className='lg:w-[250px] w-[200px]'></img>

        </div>
        <div className='py-20'>
          <div className='text-center lg:text-5xl md:text-3xl text-xl font-semibold text-white mb-10'><h1 className='mb-6'>Apply On Any Section Or Enable</h1> <h1>For Whole Page</h1></div>
          <div className='flex flex-col lg:flex-row lg:px-20 px-6'>
            <div className='bg-gradient-to-b border-b-0  lg:me-10 p-10 mb-10 lg:mb-0 from-[#0D061F] to-[#251E35] rounded-3xl border-t-2 border-t-slate-600 border-slate-800 border-2'>
              <h1 className='text-3xl text-white mb-4 w-[90%] font-semibold'>Apply on Section</h1>
              <h3 className='text-md  text-white mb-8  '>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </h3>
              <img src='motionarteffect-img11.png'></img>
            </div>
            <div className='bg-gradient-to-b  lg:me-10 p-10 lg:relative lg:top-24  from-[#0D061F] to-[#251E35] rounded-3xl border-t-2 border-t-slate-600 border-b-0 border-slate-800 border-2'>
              <h1 className='text-3xl text-white mb-4 w-[90%] font-semibold'>Apply on Section</h1>
              <h3 className='text-md text-white mb-8  '>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </h3>
              <img src='motionarteffect-img10.png'></img>
            </div>

          </div>
        </div>
        <div className='lg:py-36 px-10 md:px-20 lg:px-36'>
        <div className='bg-gradient-to-b border-b-0 lg:me-10 p-10 mb-10 lg:mb-0 from-[#0D061F] to-[#251E35] rounded-3xl border-t-2 border-t-slate-600 border-slate-800 border-2 flex flex-col justify-center items-center '>
          <h1 className='text-center text-white md:text-4xl mb-6 text-xl ' >Supported by All Popular Browsers</h1>
          <div className='text-slate-400 lg:text-xl text-center mb-8'>
            <h3>
            Rest assured, Motion Art is designed to be compatible
            </h3>
            <h3>
            with all major web browsers.
            </h3>
          </div>
          <img src='motionarteffect-img8.png ' className='self-center'></img>

        </div>
        </div>
        <div className='py-20'>
        <div className='text-white font-semibold lg:text-5xl text-xl md:text-3xl text-center mb-8'>
            <h3 className='mb-4'>
            An All-Round Plugin With
            </h3>
            <h3>
            Powerful Features
            </h3>
          </div>
          <div className='text-slate-400  lg:text-xl text-sm md:text-lg text-center mb-8'>
            <h3>
            Whether you're a seasoned web designer or just starting out, Motion Art for
            </h3>
            <h3>
            Elementor seamlessly integrates with the Elementor platform, providing you
            </h3>
            <h3>
            with a seamless and intuitive experience.
            </h3>
          </div>
           <div className='flex lg:flex-wrap lg:flex-row flex-col px-10 lg:px-20'>
            <div className='bg-gradient-to-b border-b-0 lg:me-10 p-10 pt-0 mb-10 lg:mb-0 from-[#0D061F] to-[#251E35] rounded-3xl border-t-2 border-t-slate-600 border-slate-800 border-2 flex flex-col justify-center items-start lg:w-[30%] '>
             <img src='motionarteffect-img6.png' className='mb-6 relative -left-10'></img>
             <h1 className='text-white text-4xl font-semibold mb-6'>  Light Weight</h1>
             <h3 className='text-slate-400 font-semibold text-md'>Motion Art for Elementor is designed to be lightweight.</h3>
            </div>
            <div className='bg-gradient-to-b border-b-0 lg:me-10 p-10 pt-0 mb-10 lg:mb-0 from-[#0D061F] to-[#251E35] rounded-3xl border-t-2 border-t-slate-600 border-slate-800 border-2 flex flex-col justify-center items-start lg:w-[30%] '>
             <img src='motionarteffect-img9.png' className='mb-6 relative -left-10'></img>
             <h1 className='text-white text-4xl font-semibold mb-6 '> 100% Responsive</h1>
             <h3 className='text-slate-400 font-semibold text-md'>Create a consistent visual experience across all devices.</h3>
            </div>
            <div className='bg-gradient-to-b border-b-0 lg:me-10 p-10 pt-0 mb-10 lg:mb-0 from-[#0D061F] to-[#251E35] rounded-3xl border-t-2 border-t-slate-600 border-slate-800 border-2 flex flex-col justify-center items-start lg:w-[30%]  '>
             <img src='motionarteffect-img7.png' className='mb-6 relative -left-10'></img>
             <h1 className='text-white text-3xl font-semibold mb-6'>User Friendly Interface</h1>
             <h3 className='text-slate-400 font-semibold text-md'>Ensure a smooth experience for both applicants and administrators.</h3>
            </div>

           </div>
        </div>
        <div className='flex flex-row justify-between  px-20 py-5'   style={{
        background: 'linear-gradient(90deg, rgb(248, 117, 22) 0%, rgb(94, 17, 255) 100%)'
      }}>
          <h1 className='text-slate-300'>© 2023 Copywrite. All rights reserved by QodeMatrix</h1>
          <div className='flex flex-row'>
            <a className='text-slate-300 me-6'>Documentation</a>
            <a className='text-slate-300'>Support</a>
          </div>
        </div>
        </div>
        </div>
      </>
    );
}

export default App;
