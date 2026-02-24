'use client'

import { ChevronDown } from 'lucide-react'
import NavTabs from './NavTabs'
import React, { useState } from 'react'
import SideBar from './SideBar'
require('../styles/index.css')
export default function Navbar() {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <React.Fragment>
      <nav
        className={`flex h-[100px] w-full items-center top-0 justify-between bg-app-primary px-6 text-white shadow-lg max-lg:fixed  z-30 `}
      >
        <div className="flex items-center text-[32px] font-normal tracking-wide max-xl:text-[28px]">
          <span className="italic">805</span>
          <span className="font-light">Intelligence</span>
        </div>

        {/* Center Tabs */}
        <div className="borderContainer flex items-center justify-center max-lg:hidden">
          <div className="flex items-center rounded-[11px] bg-app-primaryLight">
            <NavTabs />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 max-lg:hidden">
          <div className="h-[60px] w-[60px] overflow-hidden rounded-full border border-gray-500 bg-gray-200 max-xl:h-[40px] max-xl:w-[40px]">
            <img
              src="https://avatar.vercel.sh/david-taylor"
              alt="User"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1 text-[16px] font-medium ">
            <span>David Taylor</span>
            <ChevronDown className="h-4 w-4 text-gray-400 " />
          </div>
        </div>
        <div
          className={`lg:hidden relative flex flex-col justify-center items-center cursor-pointer h-[44px] w-[44px] ${
            !openSideBar && 'gap-1'
          }   transition-all duration-700`}
          aria-label="Toggle Sidebar"
          onClick={() => setOpenSideBar((e: boolean) => !e)}
        >
          <div
            className={`transition-all duration-500 h-1 w-8 bg-white ${
              openSideBar && 'rotate-45 translate-y-1'
            }`}
          />
          <div
            className={`transition-all duration-500 h-1 w-8 bg-white ${openSideBar && 'hidden'}`}
          />
          <div
            className={`transition-all duration-500 h-1 w-8 bg-white ${openSideBar && '-rotate-45 '}`}
          />
        </div>
      </nav>
      <SideBar isOpen={openSideBar} onClose={() => setOpenSideBar(false)} />
    </React.Fragment>
  )
}
