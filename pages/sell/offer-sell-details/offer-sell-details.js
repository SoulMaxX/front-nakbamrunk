import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OfferSellDetails from '@/components/Sells/OfferSellDetails/OfferSellDetails';
  
export default function ProductDetails() {
 
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบเสนอขาย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบเสนอขาย</li>
        </ul>
      </div>

      <OfferSellDetails datas={datas}/>
    </>
  );
}
