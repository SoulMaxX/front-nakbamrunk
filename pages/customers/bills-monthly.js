import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BillsMonthLists from '@/components/Customers/ฺBillsMonthLists';

const BillsMonth = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายงานใบวางบิลรายเดือน</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายงานใบวางบิลรายเดือน</li>
        </ul>
      </div>
      
      <BillsMonthLists />
    </>
  )
}

export default BillsMonth;