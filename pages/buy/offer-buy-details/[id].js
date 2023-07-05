import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import OfferBuyDetails from '@/components/Buy/OfferBuyDetails/OfferBuyDetails';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function OfferBuyDetail() {
  const [datas, setDatas] = React.useState('');
  const router = useRouter()
  const { id } = router.query

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/buy/get_buyquotation?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setDatas(result.data) })
  }, [id])

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบเสนอซื้อ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบเสนอซื้อ</li>
        </ul>
      </div>

      <OfferBuyDetails datas={datas} />
    </>
  );
}