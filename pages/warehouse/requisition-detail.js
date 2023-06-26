import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import AdminsLists from '@/components/Admin/AdminsLists';
import axios from 'axios';
import RequisitionDetailContent from '@/components/RequisitionDetail/RequisitionDetailContent';

const RequisitionDetail = () => {
  // const [datas, setDatas] = React.useState([]);
  
  // const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  // React.useEffect(() => {

  //   axios.get(`${process.env.NEXT_PUBLIC_API}/auth/getalluser`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then(result => setDatas(result.data))

  // },[])

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายละเอียกรายการเบิกสินค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายละเอียกรายการเบิกสินค้า</li>
        </ul>
      </div>
      
      <RequisitionDetailContent />
    </>
  )
}

export default RequisitionDetail;