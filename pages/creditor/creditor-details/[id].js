import * as React from "react";
import { Box, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import { useRouter } from "next/router";

import dynamic from 'next/dynamic'
import axios from "axios";
import CreditorDetails from "@/components/Creditor/CreditorDetails";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateCustomer = () => {
  const router = useRouter()
  const { id } = router.query
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
 
  const [datas, setDatas] = React.useState('');

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/creditor/get_creditor?id=`+id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

  }, [id])

 console.log(datas)
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>ข้อมูลเจ้าหนี้</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>ข้อมูลเจ้าหนี้</li>
        </ul>
      </div>

     <CreditorDetails datas={datas}></CreditorDetails>
    </>
  )
}

export default CreateCustomer;