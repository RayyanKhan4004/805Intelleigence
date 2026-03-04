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
import AbbyGarcia from '@/features/reports/components/dropdowns/AbbyGarcia'
import Carpinteria from '@/features/reports/components/dropdowns/Carpinteria'
import Promote from '@/features/reports/components/dropdowns/Promote'
import SantaBarbara from '@/features/reports/components/dropdowns/SantaBarbara'
import Setting from '@/features/reports/components/dropdowns/Setting'
import ShowWeeklyChanges from '@/features/reports/components/dropdowns/ShowWeeklyChanges'
import SortBy from '@/features/reports/components/dropdowns/SortBy'
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
        {/* <MarketViewStatePopUp /> */}
        {/* ::::::::::::::::::::::::::::::::::::::::: */}

        {/* :::::::::::::::DropDowns::::::::::::::::::::: */}
        {/* <Setting/> */}
        {/* <SantaBarbara /> */}
        {/* <Carpinteria/> */}
        {/* <SortBy/> */}
        {/* <AbbyGarcia/> */}
        {/* <Promote /> */}
        {/* <ShowWeeklyChanges/> */}

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
