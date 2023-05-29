import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BookbanksLists from '@/components/Finance/BookbanksLists';

const Bookbanks = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>การเงิน</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>การเงิน</li>
        </ul>
      </div>
      
      <BookbanksLists />
    </>
  )
}

export default Bookbanks;