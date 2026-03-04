'use client'
import Layout from '@/components/theme/Layout'
import {
  Analytics,
  AddNewReport,
  EmbedPopUp,
  MarketViewStatePopUp,
  PromotePopUp,
  ViewPopUp,
  Header,
  Stats,
} from '@/features/reports'
import Setting from '@/features/reports/components/dropdowns/Setting'
// import React from 'react'
// import CustomPopup from '@/components/theme/CustomPopUp'

function page() {
  return (
    <Layout settings={{ navbar: true, footer: true }}>
      {/* <Navbar /> */}
      <div>
        <Header />
        <Stats />
        <Analytics />

        {/* :::::::::::::::Pop Up::::::::::::::::::::: */}
        {/* <AddNewReport/> */}
        {/* <ViewPopUp/> */}
        {/* <PromotePopUp/> */}
        {/* <EmbedPopUp /> */}
        <MarketViewStatePopUp />
        {/* ::::::::::::::::::::::::::::::::::::::::: */}

        {/* :::::::::::::::DropDowns::::::::::::::::::::: */}
        {/* <Setting/> */}
        {/* ::::::::::::::::::::::::::::::::::::::::: */}

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
  )
}

export default page
