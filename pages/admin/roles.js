import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import RolesLists from '@/components/Admin/RolesLists';

const Employees = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>บทบาท</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>บทบาท</li>
        </ul>
      </div>
      
      <RolesLists />
    </>
  )
}

export default Employees;