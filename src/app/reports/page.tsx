// 'use client'
import Navbar from '@/feature/navBar/components/Navbar'
import Header from '@/feature/reports/components/header'
// import React from 'react'
// import CustomPopup from '@/components/theme/CustomPopUp'

function page() {
  // const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      {/* <CustomPopup
        title="ertyh"
        Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        kjhgfdsa
      </CustomPopup> */}

      {/* <div className="h-4" onClick={() => setIsOpen(true)}>hjhbnknkn</div> */}
    </div>
  )
}

export default page
