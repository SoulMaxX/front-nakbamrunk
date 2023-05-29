import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import ReceiptsLists from '@/components/Customers/ReceiptsLists';

const Receipts = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ใบสำคัญรับ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ใบสำคัญรับ</li>
        </ul>
      </div>
      
      <ReceiptsLists />
    </>
  )
}

export default Receipts;