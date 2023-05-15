import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import AdminsLists from '@/components/Admin/AdminsLists';

const Employees = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ผู้ใช้งาน</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>ผู้ใช้งาน</li>
        </ul>
      </div>
      
      <AdminsLists />
    </>
  )
}

export default Employees;