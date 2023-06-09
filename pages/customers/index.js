import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import CustomersLists from '@/components/Customers/CustomersLists';

const Customers = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ลูกค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ลูกค้า</li>
        </ul>
      </div>
      
      <CustomersLists />
    </>
  )
}

export default Customers;