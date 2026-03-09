'use client'
import { useState } from 'react'
import Layout from '@/components/theme/Layout'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import CustomAreaChart from '@/components/theme/AreaChart'
import { br, cards, sampleData } from '@/features/reports/Data'
import { DetailTable } from '@/features/reports/components/detailTable'

import GoogleMap from '@/features/detail/components/GoogleMap'
import StackedBarChart from '@/components/theme/CustomBarChart'

function page() {
  const [tapSwitch, settapSwitch] = useState<'Houses' | 'Codos'>('Houses')
  return (
    <div>
      <Layout settings={{ navbar: true }}>
        <div className='p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6'>
          <div className="font-semibold text-[30px] text-app-primary">
            Market Update with 805Intelleigence
          </div>
          <div className="text-[14px] text-app-blackText ">Presented by Sergio Gonzalez</div>
        </div>
        <div className="flex justify-between items-center bg-app-stroke rounded-[80px] py-[19px] px-5 p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
          <div className="border border-app-primary rounded-[32px] overflow-hidden bg-white ">
            <button
              onClick={() => settapSwitch('Houses')}
              className={`${tapSwitch === 'Houses' ? 'bg-app-primary text-white rounded-[32px]' : 'bg-white text-primary '} px-[16px] py-[8px] `}
            >
              Houses
            </button>
            <button
              onClick={() => settapSwitch('Codos')}
              className={`${tapSwitch === 'Codos' ? 'bg-app-primary text-white rounded-[32px]' : 'bg-white text-primary'} px-[16px] py-[8px] `}
            >
              Codos
            </button>
          </div>
          <div className="flex items-center gap-[10px]">
            <div>
              <Input
                placeholder="Search by Cities & Zip Code"
                className="w-[390px] rounded-[32px] border border-app-primary text-[20px] text-app-greyText px-[48px] py-[8px]"
              />
            </div>
            <div>
              <Button variant="roundedOutline">
                <Icon name={'Bell'} width={22} height={22} />
                Subscribe
              </Button>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full h-[60px] rounded-[32px] border-app-primary border-[1px]  data-[placeholder]:font-medium data-[placeholder]:text-[20px] text-white  data-[placeholder]:text-white data-[placeholder]:bg-app-primary">
                  <SelectValue placeholder="Share" className="font-medium text-[20px] " />
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
          <div>
            <div className="font-semibold text-[30px] text-app-primary">Acton, CA </div>
            <div className="font-bold text-[16px] text-app-primary">Mon, Dec 08 2025</div>
            <div className="text-[16px] text-app-greyText">
              This week the median list price for Acton, CA is $882,500 with the market action index
              hovering around 38. This is less than last month's market action index of 40.
              Inventory has decreased to 30. Click here to stay informed with the Acton market!
            </div>
          </div>
          <div>
            <div className="font-semibold text-[30px] text-app-primary">Market Narrative</div>
            <div className="text-[16px] text-app-greyText">
              The market has started cooling and prices have been flat for several weeks. Since
              we’re in the Seller’s zone, watch for changes in MAI. If the MAI resumes its climb,
              prices will likely follow suit. If the MAI drops consistently or falls into the
              Buyer’s zone, watch for downward pressure on prices.
            </div>
          </div>

          <div className="w-full  rounded-[20px] shadow-shadow p-5">
            <div className="flex flex-col gap-[8px]">
              <div className="font-semibold text-[30px] text-app-primary">Select the Charts</div>
              <div>
                <Select>
                  <SelectTrigger className="w-[540px] h-[60px] rounded-[16px] border-app-primary border-[1px]  data-[placeholder]:text-[16pxpx] data-[placeholder]:text-app-primary  ">
                    <SelectValue
                      placeholder="2025 YTD Performance"
                      className="font-medium text-[16px] py-[18px] px-[20px]"
                    />
                  </SelectTrigger>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="font-bold text-[26px] text-app-primary">
                Median List price for Los Angeles County, CA
              </div>
              <CustomAreaChart />
            </div>
          </div>

          <div className="flex flex-col gap-[40px]">
            <div>
              <div className="font-bold text-[25px] text-app-white bg-app-primary text-nowrap text-center rounded-tl-[10px] rounded-tr-[10px] py-[16px] px-[628px]">
                2025 Sales
              </div>
              <DetailTable tableData={sampleData} />
            </div>
            <div>
              <div className="font-bold text-[25px] text-app-white bg-app-primary text-nowrap text-center rounded-tl-[10px] rounded-tr-[10px] py-[16px] px-[628px]">
                2024 Sales
              </div>
              <DetailTable tableData={sampleData} />
            </div>
          </div>

          <div className=" w-full  rounded-[20px] shadow-shadow p-5">
            <GoogleMap />
          </div>

          {/* <div className=" w-[453px] h-[362px]  rounded-[18px] shadow-shadow p-5 flex flex-col gap-[18px]">
        <div>
      <StackedBarChart data={br} />
      </div>
      <div className='font-semibold text-[27px] text-app-primary text-center '>Avg List Price</div>
    </div> */}
          <div className="grid grid-cols-3 gap-6">
            {cards.map(card => (
              <div
                key={card.id}
                className="w-[453px] h-[362px] rounded-[18px] shadow-shadow p-5 flex flex-col gap-[18px]"
              >
                <div>
                  <StackedBarChart data={br} />
                </div>

                <div className="font-semibold text-[27px] text-app-primary text-center">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default page
