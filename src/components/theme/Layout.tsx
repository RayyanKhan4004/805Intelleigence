import Navbar from '@/features/navBar/components/Navbar'
import { LayoutProps } from '../types'
import Footer from '@/features/Footer/components/Footer'
import React from 'react'
/**
 * Layout component used to wrap pages with optional Navbar,
 * Hero section, content padding, and Footer.
 *
 * This component provides a flexible page structure where
 * layout behavior can be controlled through the `settings` prop.
 *
 * @component
 *
 * @param {Object} props - Component props
 * @param {LayoutProps} [props.settings] - Layout configuration options
 * @param {boolean} [props.settings.navbar] - Determines whether the Navbar should be displayed
 * @param {boolean} [props.settings.footer] - Determines whether the Footer should be displayed
 * @param {number} [props.settings.padding] - Horizontal padding (in pixels) applied to page content
 * @param {React.ReactNode} props.children - Main page content
 * @param {React.ReactNode} [props.heroComponent] - Optional hero section rendered above main content
 *
 * @returns {JSX.Element} The structured layout wrapper
 *
 * @example
 * ```tsx
 * <Layout
 *   settings={{ navbar: true, footer: true, padding: 24 // X AXIS}}
 *   heroComponent={<Hero />}
 * >
 *   <MainContent />
 * </Layout>
 * ```
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
