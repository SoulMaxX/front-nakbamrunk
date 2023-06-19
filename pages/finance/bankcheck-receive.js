import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BankcheckLists from '@/components/Finance/BankcheckLists';
import axios from 'axios';

const BankCheck = () => {
  
  const [datas, setDatas] = React.useState([]);
  
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/finance/get_allCR`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

  },[])
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เช็ครับ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เช็ครับ</li>
        </ul>
      </div>
      
      <BankcheckLists datas={datas}/>
    </>
  )
}

export default BankCheck;