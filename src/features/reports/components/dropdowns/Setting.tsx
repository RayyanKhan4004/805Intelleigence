import React from 'react'

import { Button } from '@/components/UI/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu'
import { Icon } from '@/shared/icons/Icon'
import { IconProps } from '@/shared/icons/types'
function Setting() {
  const menuItems: { label: string; icon: IconProps['name']; onClick: () => void }[] = [
    {
      label: 'Settings',
      icon: 'Setting',
      onClick: () => console.log('Settings clicked'),
    },
    {
      label: 'Customize Reports',
      icon: 'Pencil',
      onClick: () => console.log('Customize Reports clicked'),
    },
    {
      label: 'Integration',
      icon: 'Workflow',
      onClick: () => console.log('Integration clicked'),
    },
    {
      label: 'Logout',
      icon: 'Logout',
      onClick: () => console.log('Logout clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Settings</Button>
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

export default Setting
