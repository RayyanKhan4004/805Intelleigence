import React from 'react'
import { Button } from '@/components/UI/button'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

function CreatedAnyTimeTwo() {
     const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'Last 7 Days',

      onClick: () => console.log('Last 7 Days clicked'),
    },
    {
      label: 'Last 30 Days',

      onClick: () => console.log('Last 30 Days clicked'),
    },
    {
      label: 'Last 90 Days',

      onClick: () => console.log('Last 90 Days clicked'),
    },
    {
      label: 'Last 365 Days',

      onClick: () => console.log('Last 365 Days clicked'),
    },
    {
      label: 'View All ',

      onClick: () => console.log('New Client default Campaign  clicked'),
    },
  ]
  return (
    <div>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Created Any Time Two</Button>
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

export default CreatedAnyTimeTwo
