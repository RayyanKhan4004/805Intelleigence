// import React from 'react'
import { TableFeature, TableHead } from '../../AddNewUserData'
import { Icon } from '@/shared/icons/Icon'

function AddNewUserTable() {
  return (
    <div className="w-full px-[30px] lg:px-[60px] pt-[59px] pb-[80px] overflow-x-scroll">
      <style jsx>{`
        .table-component {
          background: linear-gradient(to bottom right, #ebecee, #f9f9fa, #eeeff0);
          border-collapse: collapse;
          width: 100%;
          justify-content: center;
          overflow-x-scroll;
        }

        table tr td:first-child {
          padding-left: 60px;
          text-align: left;
        }

        @media (max-width: 1200px) {
          table tr td:first-child {
            padding-left: 30px;
            text-align: left;
          }
        }
      `}</style>

      <table className="w-full table-component overflow-hidden">
        <thead>
          <tr className="bg-app-mutedBg border-b border-app-stroke">
            <th
              className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] text-left"
              style={{ verticalAlign: 'middle' }}
            >
              {TableHead[0]}
            </th>

            {TableHead.map(
              (head: string, ind: number) =>
                ind > 0 && (
                  <th
                    key={head}
                    className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] text-left text-nowrap"
                    style={{ verticalAlign: 'middle' }}
                  >
                    {head}
                  </th>
                )
            )}
          </tr>
        </thead>

        <tbody>
          {TableFeature.map((curr, ind) => (
            <tr key={ind} className="text-center border-b border-app-stroke">
              <td
                style={{ verticalAlign: 'middle' }}
                className="w-[450px] px-[24px] text-[18px] font-semibold pr-[20px] lg:pr-[27px] py-[16px] lg:py-[18px] leading-6 text-app-primary text-nowrap "
              >
                {curr.account}
              </td>

              <td
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontWeight: ind === 0 ? '700' : '500',
                }}
              >
                <div className="flex justify-center items-center text-[var(--color-primary)] text-[20px] leading-[56px]">
                  {typeof curr.noaccess === 'boolean'
                    ? curr.noaccess && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.noaccess}
                </div>
              </td>

              <td
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontWeight: ind === 0 ? '700' : '500',
                }}
              >
                <div className="flex justify-center items-center text-[var(--color-primary)] text-[20px] leading-[56px]">
                  {typeof curr.readonly === 'boolean'
                    ? curr.readonly && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.readonly}
                </div>
              </td>

              <td
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontWeight: ind === 0 ? '700' : '500',
                }}
              >
                <div className="flex justify-center items-center text-[var(--color-primary)] text-[20px] leading-[56px]">
                  {typeof curr.accountadmin === 'boolean'
                    ? curr.accountadmin && <Icon name={'CheckCircle'} width={40} height={40} />
                    : curr.accountadmin}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AddNewUserTable
