'use client'
import Footer from '@/features/Footer/components/Footer'
import Navbar from '@/features/navBar/components/Navbar'
import Analytics from '@/features/reports/components/Analytics'
import Header from '@/features/reports/components/header'
import Stats from '@/features/reports/components/Stats'
// import React from 'react'
// import CustomPopup from '@/components/theme/CustomPopUp'

function page() {
  // const [isOpen, setIsOpen] = React.useState(true)
  return (
    <>
      <Navbar />
      <div className="px-[60px]">
        <Header />
        <Stats />
        <Analytics />

        {/* <CustomPopup
        title="ertyh"
        Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
      </CustomPopup> */}

        {/* <div className="h-4" onClick={() => setIsOpen(true)}>hjhbnknkn</div> */}
       
      </div>
    </>
  )
}

export default page
