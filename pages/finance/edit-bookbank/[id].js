import * as React from "react";
import { Box } from "@mui/material";
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
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateEmployee = () => {
  const router = useRouter()
  const { id } = router.query
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  const [datas, setDatas] = React.useState('');

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/finance/get_bank?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))
  }, [id])



  const handleChange = (event) => {
    setDatas({ ...datas, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.put(`${process.env.NEXT_PUBLIC_API}/finance/update_bank?id=` + id, datas, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())
  };

  const handleClose = ()=>{
    router.back()
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขบัญชีธนาคาร</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ไขบัญชีธนาคาร</li>
        </ul>
      </div>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            background: "#fff",
            padding: "30px 20px",
            borderRadius: "8px",
            mb: "15px"
          }}
          className="bg-black"
        >


          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อบัญชี
              </Typography>
              <TextField
                onChange={handleChange}
                value={datas.nameAccount ?? ""}
                autoComplete="product-name"
                name="nameAccount"
                required
                fullWidth
                id="nameAccount"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อธนาคาร
              </Typography>
              <TextField
                onChange={handleChange}

                value={datas.nameBank ?? ""}
                autoComplete="product-name"
                name="nameBank"
                required
                fullWidth
                id="nameBank"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                สาขา
              </Typography>
              <TextField
                value={datas.branchBank ?? ""}
                onChange={handleChange}
                autoComplete="product-name"
                name="branchBank"
                required
                fullWidth
                id="branchBank"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ประเภทบัญชี
              </Typography>

              <Select
                value={datas.type ?? ""}
                name="type"
                labelId="demo-simple-select-label"
                id="type"
                onChange={handleChange}
              >
                <MenuItem value={"ออมทรัพย์"}>ออมทรัพย์</MenuItem>
                <MenuItem value={"กระแสรายวัน"}>กระแสรายวัน</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เลขบัญชีธนาคาร
              </Typography>
              <TextField
                inputProps={{ maxLength: 10 }}
                value={datas.accountNumber ?? ""}
                onChange={handleChange}
                autoComplete="short-description"
                name="accountNumber"
                required
                fullWidth
                id="accountNumber"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>


            <Grid item xs={12} textAlign="end">

              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important",
                  marginRight: "10px"

                }}
              >

                บันทึก
              </Button>
              <Button
                // type="submit"
                variant="contained"
                color="danger"
                onClick={handleClose}
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important"
                }}
              >

                ยกเลิก
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateEmployee;