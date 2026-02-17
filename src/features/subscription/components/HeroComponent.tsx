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
      backgroundColor: '#F3F4F5',
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
  const [tapswitch, settapswitch] = useState<'individual' | 'office'>('individual')
  return (
    <>
      <div
        className="w-full py-20 flex flex-col items-center text-center px-[60px] relative overflow-hidden"
        style={generateGrid()}
      >
        {/* <div
          className="absolute h-[828px] w-[2051px] rounded-full top-[-50px] bg-transparent -z-10"
          style={{ border: '150px solid #2D3F5033/.2' }}
        /> */}
        {/* Small Button */}
        <div
          style={{
            background: `linear-gradient(135deg, #2D3F50,#CFD2D7, #CDD2D6 ,#2D3F50)`,
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
          <button
            onClick={() => {
              settapswitch('individual')
            }}
            className={` ${tapswitch === 'individual' ? 'bg-app-primary text-white' : 'bg-white text-primary'}  h-[59px] w-[172px] items-center flex justify-center  rounded-[6px] font-semibold`}
          >
            Individual
          </button>
          <button
            onClick={() => {
              settapswitch('office')
            }}
            className={` ${tapswitch === 'office' ? 'bg-app-primary text-white' : 'bg-white text-app-primary'}   h-[59px] w-[172px] items-center flex justify-center  rounded-[6px] font-semibold text-[18px]`}
          >
            Office
          </button>
        </div>
      </div>
    </>
  )
}

export default HeroComponent
