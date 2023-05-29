import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import TaxBuyDetails from '@/components/Buy/TaxBuyDetails/TaxBuyDetails';
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบกำกับภาษีขาย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบกำกับภาษีขาย</li>
        </ul>
      </div>

      <TaxBuyDetails />
    </>
  );
}
