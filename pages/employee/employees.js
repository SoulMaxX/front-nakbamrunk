import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import EmployeesLists from '@/components/Employees/EmployeesLists';

const Employees = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ธุรการ</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>ธุรการ</li>
        </ul>
      </div>
      
      <EmployeesLists />
    </>
  )
}

export default Employees;