'use client'
import React from 'react'
import { PricingTableHead as TableHead, PricingTableFeature as feature } from '../Data'
import Image from 'next/image'

import Link from 'next/link'
import { Icon } from '@/shared/icons/Icon'

function TableComponent() {
  return (
    <div className="w-full px-[30px] lg:px-[60px] max-lg:overflow-x-scroll pt-[59px] pb-[80px] ">
      <style jsx>{`
        .table-component {
          background: linear-gradient(to bottom right, #ebecee, #f9f9fa, #eeeff0);
          border-collapse: collapse;
          width: 100%;
          justify-content: center;
        }
        table tr td:first-child {
          padding-left: 60px;
          text-align: left;
        }
        table tr td,
        table thead tr th {
          border: 1px solid #bcbebf;
        }
        @media (max-width: 1200) {
          table tr td:first-child {
            padding-left: 30px;
            text-align: left;
          }
        }
      `}</style>
      <table className="w-full border-collapse table-component border-[2px] border-gray-800 rounded-tr-[32px] rounded-tl-[32px]  rounded-bl-[32px] rounded-br-[32px] overflow-hidden" >
        <thead>
          <tr>
            <th
              className="  !p-10 border-[2px] text-[22px] text-black font-medium border-gray-300  text-left"
              style={{ verticalAlign: 'middle' }}
            >
              {TableHead[0]}
            </th>
            {TableHead.map(
              (head: string, ind: number) =>
                ind > 0 && (
                  <th
                    key={head}
                    className="  !p-10 border-[2px] text-[22px] text-black font-medium border-gray-300  text-left  "
                    style={{ verticalAlign: 'middle', textAlign: 'center' }}
                  >
                    {head}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {feature.map((curr, ind) => (
            <tr key={ind} className="text-center">
              <td
                style={{ verticalAlign: 'middle' }}
                className=" w-[450px] px-[24px] text-[20px] pr-[16px] lg:pr-[27px] border-[2px] border-gray-300 py-[16px] lg:py-[18px] leading-6 "
              >
                {curr.desp}
              </td>
              <td
                style={{ verticalAlign: 'middle', textAlign: 'center' }}
                className="border-[2px] border-gray-300 py-[34px] "
              >
                <div className=" flex justify-center items-center font-medium text-[var(--color-primary)] text-[20px]  leading-[56px]">
                  {typeof curr.basic === 'boolean'
                    ? curr.basic && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.basic}
                </div>
              </td>

              <td
                style={{ verticalAlign: 'middle', textAlign: 'center' }}
                className="border-[2px] border-gray-300"
              >
                <div className="  flex justify-center items-center font-medium text-[var(--color-primary)] text-[20px]  leading-[56px]">
                  {typeof curr.premium === 'boolean'
                    ? curr.premium && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.premium}
                </div>
              </td>

              <td
                style={{ verticalAlign: 'middle', textAlign: 'center' }}
                className="border-[2px] border-gray-300"
              >
                <div className="  flex justify-center items-center font-medium text-[var(--color-primary)] text-[20px]  leading-[56px]">
                  {typeof curr.pro === 'boolean'
                    ? curr.pro && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.pro}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
