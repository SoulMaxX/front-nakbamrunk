import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BillsLists from '@/components/Creditor/ฺBillsLists';

const Bills = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ใบวางบิลเจ้าหนี้</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>ใบวางบิลเจ้าหนี้</li>
        </ul>
      </div>
      
      <BillsLists />
    </>
  )
}

export default Bills;