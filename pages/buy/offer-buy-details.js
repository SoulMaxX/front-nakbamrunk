import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OfferBuyDetails from '@/components/Buy/OfferBuyDetails/OfferBuyDetails';
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบเสนอซื้อ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบเสนอซื้อ</li>
        </ul>
      </div>

      <OfferBuyDetails />
    </>
  );
}
