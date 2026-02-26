'use client'
import Layout from '@/components/theme/Layout'
// import Footer from '@/features/Footer/components/Footer'
// import Navbar from '@/features/navBar/components/Navbar'
import Analytics from '@/features/reports/components/Analytics'
import AddNewReport from '@/features/reports/components/dialouges/AddNewReport'
import Header from '@/features/reports/components/header'
import Stats from '@/features/reports/components/Stats'
// import React from 'react'
// import CustomPopup from '@/components/theme/CustomPopUp'

function page() {
  // const [isOpen, setIsOpen] = React.useState(true)
  return (
    <>
      <Layout settings={{ navbar: true,footer:true }}>
        {/* <Navbar /> */}
        <div>
          <Header />
          <Stats />
          <Analytics />
          <AddNewReport/>

          {/* <CustomPopup
        title="ertyh"
        Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
      </CustomPopup> */}

          {/* <div className="h-4" onClick={() => setIsOpen(true)}>hjhbnknkn</div> */}
        </div>
      </Layout>
    </>
  )
}

export default page
