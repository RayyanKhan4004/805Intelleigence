// import React, { useEffect } from 'react';

import Typography from '@/components/theme/Typography'
import { useEffect, useState } from 'react'

// import { use } from 'chai';

function HeroComponent() {
  // states
  const [gradient, setGradient] = useState(1)
  //   setGradient(prev => (prev >= 270 ? 90 : prev + 1))
  //   This function generates the CSS for the grid background

  function generateGrid() {
    return {
      backgroundImage: `
        linear-gradient(to right, #DCDDDF 1px, transparent 1px),
        linear-gradient(to bottom, #DCDDDF 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px', // size of each square in the grid
      backgroundColor: 'rgba(255,255,255,1)',
    }
  }
  //   useEffect(() => {
  //     setInterval(() => {
  //     //   setGradient(prev => (prev > 360 ? 1 : prev + 1))
  //       // console.log(gradient);
  //     }, 100)
  //     generateGrid()
  //     // return () => clearInterval(interval);
  //   }, [])
  return (
    <>
      <div className="w-full py-20 flex flex-col items-center text-center" style={generateGrid()}>
        {/* Small Button */}
        <div
          style={{
            background: `linear-gradient(95deg, #2D3F50,#CFD2D7 ,#2D3F50)`,
          }}
          className=" transition-all duration-700 text-nowrap w-[252px] h-[28px] flex justify-center items-center rounded-[100px]"
        >
          <div
            className="bg-white rounded-[100px] !w-[calc(100%-3px)] h-[calc(100%-3px)] flex justify-center items-center"
            style={{ width: 'calc(100% - 3px)' }}
          >
         
            <div className=" text-nowrap text-[12px] font-normal   rounded-full  w-fit flex justify-center items-center leading-[16px] text-[var(--color-secondary)]">
              Bring your business to the best scale
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="bg-gradient-to-b from-[#5A5B56] from-[30%] to-[#009696] text-clip bg-clip-text text-transparent mt-6">
          <Typography variant={'h7'} className=" text-[64px] font-medium  ">
            Choose the plan that
          </Typography>
          <Typography variant="h7" className=" text-[64px] font-medium ">
            is right for you and your team.
          </Typography>
        </div>

        <Typography variant="TableText" className=" text-[16px] font-regular text-app-primary">
          Flexible pricing tailored to fit your business goals
        </Typography>
       


        <div className="flex items-center rounded-[6px] pt-[40px]">
          <button className="bg-app-primary h-[59px] w-[172px] items-center flex justify-center text-white rounded-[6px]">
            Individual
          </button>
          <button className="bg-white h-[59px] w-[172px] items-center flex justify-center text-primary rounded-[6px]">Office</button>
        </div>
      </div>
    </>
  )
}

export default HeroComponent
