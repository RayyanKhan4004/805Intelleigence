'use client'

import Footer from '@/features/Footer/components/Footer'
import Navbar from '@/features/navBar/components/Navbar'
import HeroComponent from '@/features/subscription/components/HeroComponent'
import TableComponent from '@/features/subscription/components/SubscriptionTable'
function subscriptionpage() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
     <TableComponent /> 
     <Footer />
    </div>
  )
}
export default subscriptionpage
