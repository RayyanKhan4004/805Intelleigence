import React from 'react'
import { IconProps } from '@/shared/icons/types'
import { Icon } from '@/shared/icons/Icon'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/UI/dropdown-menu'
import { Button } from '@/components/UI/button'
function ContactsPage() {
  const menuItems: { label: string; icon: IconProps['name']; onClick: () => void }[] = [
    {
      label: 'Delete Selected',
      icon: 'Delete',
      onClick: () => console.log('Delete Selected clicked'),
    },
    {
      label: 'Assign Reports',
      icon: 'Assign',
      onClick: () => console.log('Assign Reports clicked'),
    },
    {
      label: 'Assign Campaign',
      icon: 'Compaign',
      onClick: () => console.log('Assign Campaign clicked'),
    },
    {
      label: 'OPT-out of Email',
      icon: 'Opt',
      onClick: () => console.log('OPT-out of Email clicked'),
    },
    {
      label: 'Send Email Now',
      icon: 'SendEmail',
      onClick: () => console.log('Send Email Now clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">ContactPage</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index} onClick={item.onClick}>
              <Icon name={item.icon} width={24} height={24} /> {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ContactsPage
