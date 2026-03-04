'use client'

import { PricingTableHead as TableHead, PricingTableFeature as feature } from '../Data'

import { Icon } from '@/shared/icons/Icon'

function TableComponent() {
  return (
    <div className="w-full px-[30px] lg:px-[60px]  pt-[59px] pb-[80px] overflow-x-scroll ">
      <style jsx>{`
        .table-component {
          background: linear-gradient(to bottom right, #ebecee, #f9f9fa, #eeeff0);
          border-collapse: collapse;
          width: 100%;
          justify-content: center;
          overflow-x-scroll
          
        }
        table tr td:first-child {
          padding-left: 60px;
          text-align: left;
        }
        table tr td,
        table thead tr th {
          border: 1px solid #d1d1d1;
        }
        @media (max-width: 1200) {
          table tr td:first-child {
            padding-left: 30px;
            text-align: left;
          }
        }
      `}</style>
      <table
        className="w-full table-component border-[2px] rounded-[32px] overflow-hidden"
        style={{ border: '1px solid var(--color-stroke)' }}
      >
        <thead>
          <tr>
            <th
              className="  !pl-[60px]  border-[2px] text-[22px] text-black rounded-[34px]  font-medium text-left "
              style={{ verticalAlign: 'middle' }}
            >
              {TableHead[0]}
            </th>
            {TableHead.map(
              (head: string, ind: number) =>
                ind > 0 && (
                  <th
                    key={head}
                    className="  pl-[40px] border-[2px] text-[22px] text-black text-left font-bold  pb-[7px] pt-[40px]"
                    style={{ verticalAlign: 'middle', textAlign: 'left' }}
                  >
                    {head}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {feature.map((curr, ind) => (
            <tr key={ind} className="text-center ">
              <td
                style={{ verticalAlign: 'middle' }}
                className=" w-[450px] px-[24px] text-[18px] font-semibold pr-[16px] lg:pr-[27px] border-[2px]  py-[16px] lg:py-[18px] leading-6 text-app-primary "
              >
                {curr.desp}
              </td>
              <td
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontWeight: ind === 0 ? '700' : '500',
                }}
                className="border-[2px] border-gray-300 "
              >
                <div className=" flex justify-center items-center  text-[var(--color-primary)] text-[20px]  leading-[56px]">
                  {typeof curr.basic === 'boolean'
                    ? curr.basic && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.basic}
                </div>
              </td>

              <td
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontWeight: ind === 0 ? '700' : '500',
                }}
                className="border-[2px] border-gray-300"
              >
                <div className="  flex justify-center items-center text-[var(--color-primary)] text-[20px]  leading-[56px]">
                  {typeof curr.premium === 'boolean'
                    ? curr.premium && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.premium}
                </div>
              </td>

              <td
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontWeight: ind === 0 ? '700' : '500',
                }}
                className="border-[2px] "
              >
                <div className="  flex justify-center items-center text-[var(--color-primary)] text-[20px]  leading-[56px]">
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
