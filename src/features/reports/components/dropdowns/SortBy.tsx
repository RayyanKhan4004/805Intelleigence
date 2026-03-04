import { Button } from '@/components/UI/button';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React from 'react'

function SortBy() {
     const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'A-Z',

      onClick: () => console.log('A-Z clicked'),
    },
    {
      label: 'Z-A',

      onClick: () => console.log('Z-A clicked'),
    },
    {
      label: 'By Views',

      onClick: () => console.log('By Views clicked'),
    },
  ]
  return (
    <div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Sort By</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuItem.map((item, index) => (
            <DropdownMenuItem key={index} onClick={item.onClick}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SortBy
