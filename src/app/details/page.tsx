'use client'
import { useState } from 'react'
import Layout from '@/components/theme/Layout'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'

function page() {
  const [tapswitch, settapswitch] = useState<'Houses' | 'Codos'>('Houses')
  return (
    <div>
      <Layout settings={{ navbar: true }}>
        <div>
          <div className="font-semibold text-[30px] text-app-primary">
            Market Update with 805Intelleigence
          </div>
          <div className="text-[14px] text-app-blackText ">Presented by Sergio Gonzalez</div>
        </div>
        <div className="flex justify-between items-center bg-app-stroke rounded-[80px] ">
          <div>
            <button
              onClick={() => settapswitch('Houses')}
              className={`${tapswitch === 'Houses' ? 'bg-app-primary text-white rounded-[32px]' : 'bg-white text-primary '}px-[16px] py-[8px] `}
            >
              Houses
            </button>
            <button
              onClick={() => settapswitch('Codos')}
              className={`${tapswitch === 'Codos' ? 'bg-app-primary text-white rounded-[32px]' : 'bg-white text-primary'} px-[16px] py-[8px] `}
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
      </Layout>
    </div>
  )
}

export default page
