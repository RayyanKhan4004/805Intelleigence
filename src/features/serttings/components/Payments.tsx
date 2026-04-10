import React from 'react'
import AccountBilling from '@/features/settingsPage/components/AccountBilling'
import CreditCardDetailTable from '@/features/settingsPage/components/CreditCardDetailTable'
import PaymentTable from '@/features/settingsPage/components/PaymentTable'
function Payments() {
  return (
    <div>
         <>
            <div className=" flex flex-col rounded-[20px] shadow-shadow p-5 px-[30px]">
              <div className="flex flex-col gap-[30px]">
                <div className="font-semibold text-[25px] text-app-primary">
                  Credit Card Details
                </div>
                <div className="mt-[20px]">
                  <CreditCardDetailTable />
                </div>
                <div className="font-semibold text-[25px] text-app-primary">Account Billing</div>
                <div className="mt-[20px]">
                  {' '}
                  <AccountBilling />
                </div>
                <div className="font-semibold text-[25px] text-app-primary">Payments</div>
                <div className="mt-[20px]">
                  <PaymentTable />
                </div>
              </div>
            </div>
          </>
    </div>
  )
}

export default Payments
