import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OfferSellDetails from '@/components/Sells/OfferSellDetails/OfferSellDetails';
import { useRouter } from 'next/router';
import axios from 'axios';
  
export default function ProductDetails() {
  const [datas, setDatas] = React.useState('');
  const router = useRouter()
  const { id } = router.query

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/sell/get_sellquotation?id=`+ id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setDatas(result.data)})
  }, [id])

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบเสนอขาย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบเสนอขาย</li>
        </ul>
      </div>

      <OfferSellDetails datas={datas} />
    </>
  );
}
