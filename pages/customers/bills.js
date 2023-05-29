import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BillsLists from '@/components/Customers/ฺBillsLists';

const Bills = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ใบวางบิลลูกหนี้</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ใบวางบิลลูกหนี้</li>
        </ul>
      </div>
      
      <BillsLists />
    </>
  )
}

export default Bills;