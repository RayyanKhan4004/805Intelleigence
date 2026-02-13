'use client';
import React from 'react';
import { PricingTableHead as TableHead, PricingTableTypes as types, PricingTableFeature as feature } from '../Data';
import Image from 'next/image';
// import checkMark from './assets/CheckCircle.png';
import Link from 'next/link';

function TableComponent() {
  return (
    <div className="w-full px-[30px] lg:px-[60px] max-lg:overflow-x-scroll ">
      <style jsx>{`
        .table-component {
          background: linear-gradient(to bottom right, #2bffff1a, #a6e0e005, #00969600);
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
          border: 2px solid #e0e0e0;
        }
        @media (max-width: 1200) {
          table tr td:first-child {
            padding-left: 30px;
            text-align: left;
          }
        }
      `}</style>
      <table className="w-full border-collapse table-component  border-[2px] border-gray-300 ">
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
                    className="  !p-10 border-[2px] text-[22px] text-black font-medium border-gray-300  text-left"
                    style={{ verticalAlign: 'middle', textAlign: 'center' }}
                  >
                    {head}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {types.map((curr, ind) => (
            <tr className="h-[76px]  text-center  " key={ind}>
              <td className="  border-[2px] py-[26px] text-[18px] font-medium text-black border-gray-300">{curr.employeess}</td>
              <td className="  border-[2px] border-gray-300  text-[28px] text-[var(--color-primary)] font-medium">{curr.basic}</td>
              <td className="  border-[2px] border-gray-300 text-[28px] text-[var(--color-primary)] font-medium ">
                {curr.premium}
                <sub className="text-[14px]">/month (billed annually)</sub>
              </td>
              {/* <td className="  border-[2px] border-gray-300 text-[28px] text-[var(--color-primary)] font-medium ">
                {curr.pro}
                <sub className="text-[14px]">/month (billed annually)</sub>
              </td> */}
            </tr>
          ))}
          <tr className="h-[155px]">
            {['', 'GET STARTED', 'GET STARTED'].map((curr, ind) => (
              <td key={ind} className=" px-4 py-2 border-[2px] border-gray-300  " style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                {curr && (
                  <>
                    <Link target="_blank" href={''}>
                      {/* <ButtonAnimated btnAnimClass="text-nowrap" text="GET STARTED NOW" variant="darkGreen" /> */}
                    </Link>
                    {/* <LinkAnimated
                      href={isLoggedIn ? '/user/profile?showSubscription=1' : '/login'}
                      variant="green"
                      btnAnimClass="w-fit"
                      text={curr}
                      target="_blank"
                    /> */}
                  </>
                )}
              </td>
            ))}
          </tr>
          <tr className="">
            <td
              className="  !p-10 border-[2px] text-[22px] text-black font-medium border-gray-300  text-left"
              style={{ verticalAlign: 'middle' }}
            >
              Green Star Feature
            </td>
            <td
              className="  !p-10 border-[2px] text-[22px] text-black font-medium border-gray-300  text-center"
              style={{ verticalAlign: 'middle' }}
            >
              Basic
            </td>
            <td
              className="  !p-10 border-[2px] text-[22px] text-black font-medium border-gray-300  text-center"
              style={{ verticalAlign: 'middle' }}
            >
              Premium
            </td>
            {/* <td></td> */}
          </tr>
          {feature.map((curr, ind) => (
            <tr key={ind} className="text-center">
              <td
                style={{ verticalAlign: 'middle' }}
                className=" w-[450px] px-[24px] text-[20px] pr-[16px] lg:pr-[27px] border-[2px] border-gray-300 py-[16px] lg:py-[28px] leading-6 "
              >
                {curr.desp}
              </td>
              <td style={{ verticalAlign: 'middle', textAlign: 'center' }} className="border-[2px] border-gray-300 py-[34px] ">
                {/* <div
                  className=" flex justify-center items-center font-medium text-[var(--color-primary)] text-[28px]  leading-[56px]"
              
                >
                  {typeof curr.basic === 'boolean' ? curr.basic && <Image src={checkMark} alt="" width={40} height={40} /> : curr.basic}
                </div> */}
              </td>

              <td style={{ verticalAlign: 'middle', textAlign: 'center' }} className="border-[2px] border-gray-300">
                {/* <div
                  className="  flex justify-center items-center font-medium text-[var(--color-primary)] text-[28px]  leading-[56px]"
                
                >
                  {typeof curr.premium === 'boolean'
                    ? curr.premium && <Image src={checkMark} alt="" width={40} height={40} />
                    : curr.premium}
                </div> */}
              </td>
              {/* <td style={{ verticalAlign: 'middle' }} className="border-[2px] border-gray-300">
                <div
                  className="font-medium text-[var(--color-primary)] text-[28px]  leading-[56px]"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {typeof curr.premium === 'boolean' ? curr.pro && <Image src={checkMark} alt="" width={40} height={40} /> : curr.premium}
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;