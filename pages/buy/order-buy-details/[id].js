import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';
import OrderBuyDetails from '@/components/Buy/OrderBuyDetails/OrderBuyDetails';

export default function OfferBuyDetail() {
  const [datas, setDatas] = React.useState('');
  const router = useRouter()
  const { id } = router.query

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/buy/get_buyorder?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setDatas(result.data) })
  }, [id])

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลใบสั่งซื้อ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลใบสั่งซื้อ</li>
        </ul>
      </div>

      <OrderBuyDetails datas={datas} />
    </>
  );
}
