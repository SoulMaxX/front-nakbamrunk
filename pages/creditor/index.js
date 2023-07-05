import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import CreditorsLists from '@/components/Creditor/CreditorsLists';
import axios from 'axios';

const Customers = () => {
  const [datas, setDatas] = React.useState([]);

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/creditor/get_allcreditor`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

  }, [])
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เจ้าหนี้</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เจ้าหนี้</li>
        </ul>
      </div>

      <CreditorsLists datas={datas} />
    </>
  )
}

export default Customers;