'use client'

import { ChevronDown } from 'lucide-react'
import NavTabs from './NavTabs'
import React, { useState } from 'react'
import SideBar from './SideBar'
// import type { CSS } from 'next'
require('../styles/index.css')
export default function Navbar() {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <React.Fragment>
      <nav
        className={`flex h-16 w-full items-center justify-between bg-app-primary px-6 text-white shadow-md max-md:fixed  `}
      >
        <div className="flex items-center text-xl font-normal tracking-wide">
          <span className="italic">805</span>
          <span className="font-light">Intelligence</span>
        </div>

        {/* Center Tabs */}
        <div className="borderContainer flex items-center justify-center max-md:hidden">
          <div className="flex items-center rounded-[11px] bg-app-primaryLight">
            <NavTabs />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 max-md:hidden">
          <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-500 bg-gray-200">
            <img
              src="https://avatar.vercel.sh/david-taylor"
              alt="User"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span>David Taylor</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div
          className={`md:hidden relative flex flex-col justify-center items-center cursor-pointer h-[44px] w-[44px] ${
            !openSideBar && 'gap-1'
          }  rounded-full transition-all duration-500`}
          aria-label="Toggle Sidebar"
          onClick={() => setOpenSideBar((e: boolean) => !e)}
        >
          <div
            className={`transition-all duration-500 h-1 w-8 bg-white ${
              openSideBar && 'rotate-45 translate-y-1'
            }`}
          
          ></div>
          <div
            className={`transition-all duration-500 h-1 w-8 bg-white ${openSideBar && 'hidden'}`}
          
          ></div>
          <div
            className={`transition-all duration-500 h-1 w-8 bg-white ${openSideBar && '-rotate-45 '}`}
          
          ></div>
        </div>
      </nav>
      <SideBar isOpen={openSideBar} />
    </React.Fragment>
  )
}
