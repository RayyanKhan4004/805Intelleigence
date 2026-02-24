import Navbar from '@/features/navBar/components/Navbar'
import { LayoutProps } from '../types'
import Footer from '@/features/Footer/components/Footer'
import React from 'react'
/**
 *
 * @param  LayoutProps 
 * settings {
 * navbar?: boolean 
 * footer?: boolean 
 * padding?: number padding X-axis
}

 * @returns
 */
function Layout({
  settings,
  children,
  heroComponent,
}: {
  settings?: LayoutProps
  children: React.ReactNode
  heroComponent?: React.ReactNode
}) {
  return (
    <React.Fragment>
      {settings?.navbar && <Navbar />}
      <div className={`max-lg:mt-[100px] `}>
        {heroComponent}
        <div className={`px-[${settings?.padding}px]`}>{children}</div>
      </div>
      {settings?.footer && <Footer />}
    </React.Fragment>
  )
}

export default Layout
