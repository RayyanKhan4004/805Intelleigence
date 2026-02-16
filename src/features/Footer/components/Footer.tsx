'use client'
import Typography from '@/components/theme/Typography'
import React from 'react'
import { footerSections } from '../data/FooterData'
import { Icon } from '@/shared/icons/Icon'

function Footer() {
  return (
    <div className="bg-primary  px-[60px] py-[40px]  ">
      <div className=" text-white flex justify-between items-start max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
        {footerSections.map(section => (
          <div key={section.title}>
            <Typography className="font-semibold mb-[64px] text-[36px] " variant="Heading1">
              {section.title}
            </Typography>
            {section.links.map(link => (
              <div key={link.label}>
                <a href={link.href}>
                  <Typography className="font-semibold text-[20px]" variant="h4">
                    {link.label}
                  </Typography>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between  items-center max-lg:flex-col">
        <div />
        <Typography variant="h4" className="text-nowrap text-white/60 font-semibold">
          All rights reserved
        </Typography>
        <div className="flex  gap-[24px] lg:mr-[70px]">
          <Icon name="Facebook" />
          <Icon name="Vector" />
          <Icon name="Insta" />
          <Icon name="Linked" />
        </div>
      </div>
    </div>
  )
}

export default Footer
