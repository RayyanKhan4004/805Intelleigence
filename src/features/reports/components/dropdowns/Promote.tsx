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
function Promote() {
  const menuItems: { label: string; icon: IconProps['name']; onClick: () => void }[] = [
    {
      label: 'Promote',
      icon: 'Promote',
      onClick: () => console.log('Promote clicked'),
    },
    {
      label: 'Embed',
      icon: 'DownDown',
      onClick: () => console.log('Embed clicked'),
    },
    {
      label: 'Views 4',
      icon: 'Eye',
      onClick: () => console.log('Views 4 clicked'),
    },
    {
      label: 'Favourite',
      icon: 'Heart',
      onClick: () => console.log('Favourite clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Promote</Button>
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

export default Promote
