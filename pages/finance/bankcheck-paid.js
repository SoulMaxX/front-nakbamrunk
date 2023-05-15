import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BankcheckPaidLists from '@/components/Finance/BankcheckPaidLists';

const BankCheck = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เช็คจ่าย</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>เช็คจ่าย</li>
        </ul>
      </div>
      
      <BankcheckPaidLists />
    </>
  )
}

export default BankCheck;