import React from 'react'
import { Button } from '@/components/UI/button'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

function ContactsDownload() {
  const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'Download CSV ',

      onClick: () => console.log('Download CSV clicked'),
    },
    {
      label: 'Download most Active ',

      onClick: () => console.log('Download most Active clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Download</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuItem.map((item, index) => (
            <DropdownMenuItem
              className="font-medium text-[16px] text-app-primary"
              key={index}
              onClick={item.onClick}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ContactsDownload
