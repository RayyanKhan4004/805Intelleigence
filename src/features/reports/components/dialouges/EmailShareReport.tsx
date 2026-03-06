import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'
import React from 'react'

function EmailShareReport() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Send This Report to:"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex items-center gap-[10px]">
            <Button className="text-[16px] font-medium text-app-primary " variant="outline">
              Cancel
            </Button>
            <Button>Send</Button>
          </div>
        }
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[20px]">
            <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px] w-[235px] h-[60px] p-[20px]">
              Name
            </div>
            <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px] w-[363px] h-[60px] p-[20px]">
              Email
            </div>
            <Button className="h-[60px]">
              <Icon name={'Plus'} width={18} height={18} />
              ADD
            </Button>
          </div>
          <div className="text-[14px] text-app-greyText w-[684px] h-[42px] pl-[20px] pr-[31px] pt-[20px] pb-[98px] border border-app-stroke rounded-[16px]">
            I thought you’d be interested in this real estate report showing real-time market trends
            in your neighborhood:
          </div>
          <div className="text-[16px] text-app-greyText">We'll add a link to the report.</div>
        </div>
      </CustomPopup>
    </div>
  )
}

export default EmailShareReport
