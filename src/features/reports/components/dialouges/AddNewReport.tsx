import CustomPopup from '@/components/theme/CustomPopUp'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import { Icon } from '@/shared/icons/Icon'
import React from 'react'

function AddNewReport() {
  const data = [
    { location: 'Los Alamos County, NM', Cities: 1, Zips: 154 },
    { location: 'Los Alamos County, CA', Cities: 345, Zips: 154 },
  ]

  const [isOpen, setIsOpen] = React.useState(true)
  const [selectedTab, setSelectedTab] = React.useState<'zipCode' | 'Country' | 'Regions'>('zipCode')
  const tabs: Array<{ label: string; value: 'zipCode' | 'Country' | 'Regions' }> = [
    {
      label: 'Zip Code',
      value: 'zipCode',
    },
    {
      label: 'Counties',
      value: 'Country',
    },
    {
      label: 'Regions',
      value: 'Regions',
    },
  ]

  return (
    <div>
      <CustomPopup
        title="Add new Report"
        // Description=""
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}

         footer={
    <Typography className="text-[14px] text-app-greyText">
      Maps by Leaflet | © OpenStreetMap contributors
    </Typography>
  }
      >
        <div className="flex gap-[15px] justify-between">
          {tabs.map(curr => {
            return (
              <Button
                className=" px-[16px] py-[8px] text-[20px] "
                onClick={() => setSelectedTab(curr.value)}
                key={curr.value}
                variant={selectedTab === curr.value ? 'rounded' : 'roundedOutline'}
              >
                {curr.label}
              </Button>
            )
          })}
        </div>

        <div className="flex gap-[10px] items-center  w-full  ">
          <div>
            <Input
              placeholder={selectedTab === 'zipCode' ? 'Los' : 'Search by ' + selectedTab}
              className="border-primary rounded-[12px] w-[275px]"
            />
          </div>
          <div>
            <Button>
              {' '}
              <Icon name={'WhiteSearchIcon'} width={24} height={24} /> Search
            </Button>
          </div>
        </div>

        {(selectedTab === 'Country' || selectedTab === 'Regions') && (
          <div className="flex items-center gap-2 px-[16px] mb-[10px] ]">
            <input type="checkbox" />
            <Label className="text-[14px] text-app-greyText">
              Include all city/zip reports from county
            </Label>
          </div>
        )}
        {selectedTab === 'zipCode' && (
          <div>
            <div className="font-bold text-[16px] text-app-primary mb-[15px]">Search Results</div>

            <div className=" flex flex-col  gap-[10px]">
              {data.map(value => {
                return (
                  <div key={value.location} className="flex w-full justify-between rounded-[20px] shadow-shadow p-5">
                    <div>
                      <Typography className="font-bold text-[16px] text-app-primary">
                        {value.location}
                      </Typography>
                      <div className="flex">
                        <Typography className="font-semibold text-[14px] text-app-greyText">
                          Cities:
                        </Typography>
                        <Typography className="font-semibold text-[14px] text-app-primary">
                          {value.Cities}
                        </Typography>
                      </div>
                      <div className="flex">
                        <Typography className="font-semibold text-[14px] text-app-greyText">
                          Zips:
                        </Typography>
                        <Typography className="font-semibold text-[14px] text-app-primary">
                          {value.Zips}
                        </Typography>
                      </div>
                    </div>
                    <Button className="h-fit">
                      <Icon name={'Plus'} width={24} height={24} />
                      ADD
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </CustomPopup>
    </div>
  )
}

export default AddNewReport
