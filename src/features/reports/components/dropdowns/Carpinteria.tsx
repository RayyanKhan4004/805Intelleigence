import { Button } from '@/components/UI/button'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

function Carpinteria() {
  const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'Carpinteria',

      onClick: () => console.log('Carpinteria clicked'),
    },
    {
      label: 'Goleta',

      onClick: () => console.log('Goleta clicked'),
    },
    {
      label: 'Los Olivos',

      onClick: () => console.log('Los Olivos clicked'),
    },
    {
      label: 'Montecito',

      onClick: () => console.log('Montecito clicked'),
    },
    {
      label: 'Goleta',

      onClick: () => console.log('Goleta  clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Carpinteria</Button>
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

export default Carpinteria
