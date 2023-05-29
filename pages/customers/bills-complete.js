import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BillsCompleteLists from '@/components/Customers/ฺBillsCompleteLists';

const BillsMonth = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายงานใบวางบิลครบกำหมด</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายงานใบวางบิลครบกำหมด</li>
        </ul>
      </div>
      
      <BillsCompleteLists />
    </>
  )
}

export default BillsMonth;