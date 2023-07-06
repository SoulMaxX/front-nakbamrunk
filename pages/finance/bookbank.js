import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BookbanksLists from '@/components/Finance/BookbanksLists';
import axios from 'axios';

const Bookbanks = () => {

  const [datas, setDatas] = React.useState([]);
  const [role, setRole] = React.useState([]);

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/finance/get_allbank`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))
    axios.get(`${process.env.NEXT_PUBLIC_API}/role/get_role`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setRole(result.data))

  }, [])
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

      <BookbanksLists datas={datas} role={role} />
    </>
  )
}

export default Bookbanks;