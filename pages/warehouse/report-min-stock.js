import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import MinStockLists from '@/components/Warehouse/MinStockLists';

const ReportMinStock = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายงานสินค้าMin</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายงานสินค้าMin</li>
        </ul>
      </div>
      
      <MinStockLists />
    </>
  )
}

export default ReportMinStock;