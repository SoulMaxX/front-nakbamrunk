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

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dynamic from 'next/dynamic'
import axios from "axios";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateBankCheck = () => {
  const [date, setDate] = React.useState(new Date());
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("date", date)

    axios.post(`${process.env.NEXT_PUBLIC_API}/finance/create_CP`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มเช็คจ่าย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มเช็คจ่าย</li>
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
            <Grid item xs={12} md={12} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสเช็คจ่าย
              </Typography>
              <TextField
                autoComplete="product-name"
                name="idPayCheck"
                required
                fullWidth
                id="idPayCheck"
                label="รหัสเช็คจ่าย"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสใบวางบิล
              </Typography>
              <TextField
                autoComplete="product-name"
                name="idBill"
                required
                fullWidth
                id="idBill"
                label="รหัสใบวางบิล"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เลขที่เช็ค/ตั๋ว
              </Typography>
              <TextField
                autoComplete="product-name"
                name="checkNumber"
                required
                fullWidth
                id="checkNumber"
                label="เลขที่เช็ค/ตั๋ว"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>




            <Grid item xs={12} md={12} lg={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography
                  as="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  ลงวันที่
                </Typography>
                <DatePicker name={"date"} value={date} InputProps={{ style: { borderRadius: 8 } }} renderInput={(props) => <TextField {...props} />} onChange={(e) => setDate(e.$d)} />

              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                จำนวนเงิน
              </Typography>
              <TextField
                autoComplete="short-description"
                name="amount"
                required
                fullWidth
                id="Short Description"
                label="amount"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ธนาคาร
              </Typography>
              <TextField
                autoComplete="short-description"
                name="bank"
                required
                fullWidth
                id="Short Description"
                label="bank"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
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
                autoComplete="short-description"
                name="brachBank"
                required
                fullWidth
                id="brachBank"
                label="สาขา"
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
                  color: "#fff !important"
                }}
              >
                <AddIcon
                  sx={{
                    position: "relative",
                    top: "-2px",
                  }}
                  className='mr-5px'
                />{" "}
                เพิ่มเช็คจ่าย
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateBankCheck;