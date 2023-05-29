import React from 'react';
import ProductDetailsContent from "@/components/eCommerce/ProductDetails/ProductDetailsContent";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
  
export default function ProductDetails() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลสินค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลสินค้า</li>
        </ul>
      </div>

      <ProductDetailsContent />
    </>
  );
}
