import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BillsTaxLists from '@/components/Customers/ฺBillsTaxLists';

const Bills = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ใบวางบิลลูกหนี้+ภาษี</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ใบวางบิลลูกหนี้+ภาษี</li>
        </ul>
      </div>
      
      <BillsTaxLists />
    </>
  )
}

export default Bills;