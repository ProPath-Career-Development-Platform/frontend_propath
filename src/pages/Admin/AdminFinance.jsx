import React from 'react'
import RevenueChart from '../../components/Admin/RevenueChart'
import FinancialOverview from '../../components/Admin/FinancialOverview'
import SubscriptionTable from '../../components/Admin/SubscriptionTable'

const AdminFinance = () => {
    return (
        <div className='mx-8 mt-3'>
          <div className='flex gap-4'>
            <div className='w-7/12'>
                <RevenueChart/>
            </div>
            <div className='w-5/12'>
                <FinancialOverview/>
            </div>
          </div>
          <div className='mt-6'>
            <SubscriptionTable/>
          </div>
        </div>
      )
}

export default AdminFinance