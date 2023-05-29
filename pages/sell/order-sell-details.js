import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OrderSellDetails from '@/components/Sells/OrderSellDetails/OrderSellDetails';
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบสั่งขาย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบสั่งขาย</li>
        </ul>
      </div>

      <OrderSellDetails />
    </>
  );
}
