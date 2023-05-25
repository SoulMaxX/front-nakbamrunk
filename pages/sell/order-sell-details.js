import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OrderSellDetails from '@/components/Sells/OrderSellDetails/OrderSellDetails';
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบเสนอขาย</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>ข้อมูลใบเสนอขาย</li>
        </ul>
      </div>

      <OrderSellDetails />
    </>
  );
}