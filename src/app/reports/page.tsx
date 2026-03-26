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
import AddNewUserPopUp from '@/features/reports/components/dialouges/AddNewUserPopUp'
import CreateCompaignPopUp from '@/features/reports/components/dialouges/CreateCompaignPopUp'
import CreateNewContactPopUp from '@/features/reports/components/dialouges/CreateNewContactPopUp'
import EmailShareReport from '@/features/reports/components/dialouges/EmailShareReport'
import PreViewEmailPopUp from '@/features/reports/components/dialouges/PreViewEmailPopUp'
import SubscribePopUp from '@/features/reports/components/dialouges/SubscribePopUp'
import UploadContactsPopUp from '@/features/reports/components/dialouges/UploadContactsPopUp'
import AbbyGarcia from '@/features/reports/components/dropdowns/AbbyGarcia'
import Carpinteria from '@/features/reports/components/dropdowns/Carpinteria'
import Compaign from '@/features/reports/components/dropdowns/Compaign'
import ContactsDownload from '@/features/reports/components/dropdowns/ContactsDownload'
import ContactsPage from '@/features/reports/components/dropdowns/ContactsPage'
import CreatedAnyTime from '@/features/reports/components/dropdowns/CreatedAnyTime'
import CreatedAnyTimeTwo from '@/features/reports/components/dropdowns/CreatedAnyTimeTwo'
import Promote from '@/features/reports/components/dropdowns/Promote'
import SantaBarbara from '@/features/reports/components/dropdowns/SantaBarbara'
import Setting from '@/features/reports/components/dropdowns/Setting'
import ShowWeeklyChanges from '@/features/reports/components/dropdowns/ShowWeeklyChanges'
import SortBy from '@/features/reports/components/dropdowns/SortBy'
import Type from '@/features/reports/components/dropdowns/Type'

// import React from 'react'
// import CustomPopup from '@/components/theme/CustomPopUp'

function page() {
  // const [isOpen, setIsOpen] = React.useState(true)
  return (
    <Layout settings={{ navbar: true, footer: true }}>
      {/* <Navbar /> */}
      <div>
        <Header />
        <Stats />
        <Analytics />

        {/* :::::::::::::::Pop Up::::::::::::::::::::: */}
        <AddNewReport/>
        {/* <ViewPopUp/> */}
        {/* <PromotePopUp/> */}
        {/* <EmbedPopUp /> */}
        {/* <MarketViewStatePopUp /> */}
        {/* <EmailShareReport/> */}
        {/* <SubscribePopUp/> */}
        {/* <UploadContactsPopUp/> */}
        {/* <CreateNewContactPopUp/> */}
        {/* <CreateCompaignPopUp/> */}
        {/* <PreViewEmailPopUp /> */}
        {/* <AddNewUserPopUp/> */}
        {/* ::::::::::::::::::::::::::::::::::::::::: */}

        {/* :::::::::::::::DropDowns::::::::::::::::::::: */}
        {/* <Setting/> */}
        {/* <SantaBarbara /> */}
        {/* <Carpinteria/> */}
        {/* <SortBy/> */}
        {/* <AbbyGarcia/> */}
        {/* <Promote /> */}
        {/* <ShowWeeklyChanges/> */}
        {/* <ContactsPage/> */}
        {/* <Compaign/> */}
        {/* <CreatedAnyTime/> */}
        {/* <CreatedAnyTimeTwo/> */}
        {/* <Type/> */}
        {/* <ContactsDownload/> */}

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
