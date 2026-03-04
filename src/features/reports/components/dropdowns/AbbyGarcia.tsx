import { Button } from '@/components/UI/button'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

function AbbyGarcia() {
  const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'Abby Garcia',

      onClick: () => console.log('Abby Garcia clicked'),
    },
    {
      label: 'Amy Parry',

      onClick: () => console.log('Amy Parry clicked'),
    },
    {
      label: 'Gracelyn Hurst',

      onClick: () => console.log('Gracelyn Hurst clicked'),
    },
    {
      label: 'Terri Palitti',

      onClick: () => console.log('Terri Palitti clicked'),
    },
    {
      label: 'Tressa Golden-Mills',

      onClick: () => console.log('Tressa Golden-Mills clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Abby Garcia</Button>
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

export default AbbyGarcia
