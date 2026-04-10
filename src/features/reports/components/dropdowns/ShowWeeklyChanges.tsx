import { Button } from '@/components/UI/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu'
import { Icon } from '@/shared/icons/Icon'
import { IconProps } from '@/shared/icons/types'
import React from 'react'

function ShowWeeklyChanges() {
  const menuItems: { label: string; icon: IconProps['name']; onClick: () => void }[] = [
    {
      label: 'Show Weekly Changes',
      icon: 'CircleDot',
      onClick: () => console.log('Show Weekly Changes clicked'),
    },
    {
      label: 'Select Market View Status',
      icon: 'Lines',
      onClick: () => console.log('Select Market View Status clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Show Weekly Changes</Button>
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

export default ShowWeeklyChanges
