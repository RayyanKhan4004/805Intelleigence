import { Button } from '@/components/UI/button'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/UI/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

function Compaign() {
  const menuItem: { label: string; onClick: () => void }[] = [
    {
      label: 'None',

      onClick: () => console.log('None clicked'),
    },
    {
      label: 'Previous Buyer Client Campaign ',

      onClick: () => console.log('Previous Buyer Client Campaign clicked'),
    },
    {
      label: 'Seller Campaign',

      onClick: () => console.log('Seller Campaign clicked'),
    },
    {
      label: 'Buyer Campaign',

      onClick: () => console.log('Buyer Campaign clicked'),
    },
    {
      label: 'New Client default Campaign ',

      onClick: () => console.log('New Client default Campaign  clicked'),
    },
    {
      label: 'View All',

      onClick: () => console.log('View All clicked'),
    },
  ]
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Campaign</Button>
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

export default Compaign
