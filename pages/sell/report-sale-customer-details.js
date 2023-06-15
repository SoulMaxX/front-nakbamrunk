import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import ReportCustomerDetails from '@/components/Sells/ReportCustomerDetails/ReportCustomerDetails';
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายงานยอดขายแยกลูกค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายงานยอดขายแยกลูกค้า</li>
        </ul>
      </div>

      <ReportCustomerDetails />
    </>
  );
}
