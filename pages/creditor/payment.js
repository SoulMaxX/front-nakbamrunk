import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import PaymentsLists from '@/components/Creditor/PaymentsLists';

const Payments = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ใบสำคัญจ่าย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ใบสำคัญจ่าย</li>
        </ul>
      </div>
      
      <PaymentsLists />
    </>
  )
}

export default Payments;