import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BillsTaxLists from '@/components/Creditor/ฺBillsTaxLists';

const Bills = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ใบวางบิลเจ้าหนี้+ภาษี</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ใบวางบิลเจ้าหนี้+ภาษี</li>
        </ul>
      </div>
      
      <BillsTaxLists />
    </>
  )
}

export default Bills;