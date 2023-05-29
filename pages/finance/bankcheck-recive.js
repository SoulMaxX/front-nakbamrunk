import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BankcheckLists from '@/components/Finance/BankcheckLists';

const BankCheck = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เช็ครับ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เช็ครับ</li>
        </ul>
      </div>
      
      <BankcheckLists />
    </>
  )
}

export default BankCheck;