import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import CustomersLists from '@/components/Customers/CustomersLists';
import axios from 'axios';

const Customers = () => {
  const [datas, setDatas] = React.useState([]);
  
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/customer/get_allcustomer`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

  },[])

  // console.log(datas)
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ลูกค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ลูกค้า</li>
        </ul>
      </div>
      
      <CustomersLists datas={datas}/>
    </>
  )
}

export default Customers;