import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import RolesLists from '@/components/Admin/RolesLists';
import axios from 'axios';

const Employees = () => {
  const [datas, setDatas] = React.useState([]);
  
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/role/get_all_role`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

  },[])

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>บทบาท</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>บทบาท</li>
        </ul>
      </div>
      
      <RolesLists datas={datas} />
    </>
  )
}

export default Employees;