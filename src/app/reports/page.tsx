'use client'
import Footer from '@/feature/Footer/components/Footer'
import Navbar from '@/feature/navBar/components/Navbar'
import Analytics from '@/feature/reports/components/Analytics'
import ChartGrid from '@/feature/reports/components/ChartGrid'
import Header from '@/feature/reports/components/header'
import Stats from '@/feature/reports/components/Stats'
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
        kjhgfdsa
      </CustomPopup> */}

        {/* <div className="h-4" onClick={() => setIsOpen(true)}>hjhbnknkn</div> */}
        <ChartGrid />
        <Footer />
      </div>
    </>
  )
}

export default page
