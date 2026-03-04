import { Button } from '@/components/UI/button';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React from 'react'

function SantaBarbara() {
  const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'Santa Barbara ',

      onClick: () => console.log('Santa Barbara clicked'),
    },
    {
      label: 'Kern',

      onClick: () => console.log('Kern clicked'),
    },
    {
      label: 'Riverside',

      onClick: () => console.log('Riverside clicked'),
    },
    {
      label: 'Ventura',

      onClick: () => console.log('Ventura clicked'),
    },
    {
      label: 'Kern',

      onClick: () => console.log('Kern  clicked'),
    },
  ]
  return <div>
     <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">SantaBarbara</Button>
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
}

export default SantaBarbara
