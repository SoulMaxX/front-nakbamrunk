import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OrderBuyDetails from '@/components/Buy/OrderBuyDetails/OrderBuyDetails';
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบเสนอซื้อ</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>ข้อมูลใบเสนอซื้อ</li>
        </ul>
      </div>

      <OrderBuyDetails />
    </>
  );
}
