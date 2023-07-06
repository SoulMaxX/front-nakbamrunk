import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import EmployeesLists from '@/components/Employees/EmployeesLists';
import axios from 'axios';

const Employees = () => {
  const [datas, setDatas] = React.useState([]);
  const [role, setRole] = React.useState([]);
  
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/admin/get_allEmployee`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

    axios.get(`${process.env.NEXT_PUBLIC_API}/role/get_role`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setRole(result.data))

  },[])
  // console.log(role?.menuEmployee?.view == 0);
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ธุรการ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ธุรการ</li>
        </ul>
      </div>
      
      <EmployeesLists  datas={datas} role={role}/>
    </>
  )
}

export default Employees;