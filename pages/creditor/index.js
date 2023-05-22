import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import CreditorsLists from '@/components/Creditor/CreditorsLists';

const Customers = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เจ้าหนี้</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>เจ้าหนี้</li>
        </ul>
      </div>
      
      <CreditorsLists />
    </>
  )
}

export default Customers;