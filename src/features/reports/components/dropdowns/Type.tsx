import React from 'react'
import { Button } from '@/components/UI/button'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

function Type() {
  const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'Buyer',

      onClick: () => console.log('Buyer clicked'),
    },
    {
      label: 'Seller ',

      onClick: () => console.log('Seller clicked'),
    },
    {
      label: 'Past Buyer',

      onClick: () => console.log('Past Buyer clicked'),
    },
    {
      label: 'Past Seller',

      onClick: () => console.log('Past Seller clicked'),
    },
    {
      label: 'Realtor',

      onClick: () => console.log('Realtor clicked'),
    },
    {
      label: 'Unassigned ',

      onClick: () => console.log('Unassigned clicked'),
    },
    {
      label: 'View All ',

      onClick: () => console.log('View All clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Type</Button>
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

export default Type
