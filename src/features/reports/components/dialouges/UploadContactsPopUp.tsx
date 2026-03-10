import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import React from 'react'

function UploadContactsPopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Import Contacts"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div>
          <span className="text-[14px] text-app-greyText">
            Need help formatting your CSV file? 
            <span className="text-[14px] text-app-primary">
              Download our example CSV file template here.
            </span>
          </span>
        </div>
        <div>
          <div className="font-bold text-[20px] text-app-primary"> Choose CSV File </div>
          <div className="border-2 border-dashed border-app-primary rounded-[15px] w-[526px] h-[131px] flex flex-col items-center justify-center  cursor-pointer">
            <span className="font-medium text-[22px] text-app-primary">
              Upload{' '}
              <span className="font-medium text-[22px] text-app-greyText">or Drop File Here </span>
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-[10px] mt-[30px]">
          <Button variant="outline">Cancel</Button>
          <Button>Upload</Button>
        </div>
      </CustomPopup>
    </div>
  )
}

export default UploadContactsPopUp
