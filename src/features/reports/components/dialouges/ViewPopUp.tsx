import CustomPopup from '@/components/theme/CustomPopUp'

import React from 'react'
import Analytics from '../Analytics'
import PopTable from '../PopTable'
import { Button } from '@/components/UI/button'

export function ViewPopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="ORANGE COUNTY, CA"
        Description="Tue, Dec, 09, 2025"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex justify-end gap-[10px]">
            <Button className="text-[16px] font-medium text-app-primary" variant="outline">
              Cancel
            </Button>
            <Button>Download CSV</Button>
          </div>
        }
      >
        <PopTable />
      </CustomPopup>
    </div>
  )
}

export default ViewPopUp
