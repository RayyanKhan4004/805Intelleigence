'use client'
import Typography from '@/components/theme/Typography'
import React from 'react'
import {footerSections} from '../data/FooterData'


function Footer() {
  return (
    <div className='grid grid-cols-4 bg-primary text-white px-[60px] py-[60px] '>
      
        {footerSections.map((section) => (  
            <div key={section.title}>
                <Typography className='font-semibold mb-[64px]' variant="Heading1">{section.title}</Typography>
                {section.links.map((link) => (
                    <div  key={link.label}>
                        <a href={link.href}>
                            <Typography className='font-semibold' variant="h4">{link.label}</Typography>
                        </a>
                    </div>
                ))}
            </div>
        ))} 
    </div>

  )
}

export default Footer
