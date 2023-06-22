import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import DeadStockLists from '@/components/Warehouse/DeadStockLists';

const ReportDeadStock = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายงานสินค้าDeadStock</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายงานสินค้าDeadStock</li>
        </ul>
      </div>
      
      <DeadStockLists />
    </>
  )
}

export default ReportDeadStock;