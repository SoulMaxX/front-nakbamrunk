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
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateCustomer = () => {
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  const [emp, setEmp] = React.useState([]);
  const [datas, setDatas] = React.useState('');

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/admin/get_allEmployee`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setEmp(result.data))

  }, [])

  // console.log(emp)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("payinmounth", datas)
    axios.post(`${process.env.NEXT_PUBLIC_API}/customer/create_customer`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => router.back())

    // console.log({
    //   payinmounth: data.get("payinmounth"),
    //   sale: data.get("sale"),
    //   datecut: data.get("datecut"),
    // });
  };

  // Select dropdown
  const [empSelect, setEmpSelect] = React.useState('');
  const handleChangeEmp = (event) => {
    setEmpSelect(event.target.value);
  };

  const handleChange = (event) => {
    if (event.target.name == "payinmounth" &&  datas == 1) {
      setDatas(0);
    } else {
      setDatas(event.target.value);
    }
  };

  console.log(datas)
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขข้อมูลลูกค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ไขข้อมูลลูกค้า</li>
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
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสลูกค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="id"
                required
                fullWidth
                id="id"
                label="รหัสลูกค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
                label="ชื่อ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ที่อยุ่
              </Typography>
              <TextField
                autoComplete="product-name"
                name="address"
                required
                fullWidth
                id="address"
                label="ที่อยุ่"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เลขประจำตัวผู้เสียภาษี
              </Typography>
              <TextField
                autoComplete="product-name"
                name="taxnumber"
                required
                fullWidth
                id="taxnumber"
                label="เลขประจำตัวผู้เสียภาษี"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
            </Grid>


            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ผู้ติดต่อ
              </Typography>
              <TextField
                autoComplete="short-description"
                name="contact"
                required
                fullWidth
                id="contact"
                label="ผู้ติดต่อ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Email
              </Typography>
              <TextField
                autoComplete="short-description"
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เบอร์โทรศัพท์
              </Typography>
              <TextField
                autoComplete="short-description"
                name="tel"
                required
                fullWidth
                id="tel"
                label="เบอร์โทรศัพท์"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เบอร์แฟกซ์
              </Typography>
              <TextField
                autoComplete="short-description"
                name="faxnumber"
                required
                fullWidth
                id="faxnumber"
                label="เบอร์แฟกซ์"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                {/* ที่อยู่ */}
              </Typography>
              <InputLabel id="demo-simple-select-label">Sales</InputLabel>
              <Select
                // labelId="demo-simple-select-label"
                sx={{ width: "200px" }}
                id="sale"
                name="sale"
                label="Sales"
                onChange={handleChangeEmp}
                // defaultValue={1}
                value={empSelect}
              >
                {emp.map((e) =>
                  // console.log(e)
                  <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                )}
              </Select>

            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                วงเงิน
              </Typography>
              <TextField
                autoComplete="short-description"
                name="limit"
                required
                fullWidth
                id="limit"
                label="วงเงิน"
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
                เครดิตวัน
              </Typography>
              <TextField
                autoComplete="short-description"
                name="creditday"
                required
                fullWidth
                id="creditday"
                label="เครดิตวัน"
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
                เครติดเดือน
              </Typography>
              <TextField
                autoComplete="short-description"
                name="creditmount"
                required
                fullWidth
                id="creditmount"
                label="เครติดเดือน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel name="payinmounth" style={{ marginTop: "30px" }} control={<Checkbox value={1} name="payinmounth" onChange={handleChange} />} label="ชำระสิ้นเดือน" />
            </Grid>
            <Grid item xs={12} md={12} lg={6}></Grid>

            <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ตัดวันที่
              </Typography>
              <TextField
                autoComplete="short-description"
                name="datecut"
                required
                fullWidth
                id="datecut"
                // label="ตัดวันที่"
                type="date"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            {/* <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
              </Typography>
              <FormLabel id="demo-radio-buttons-group-label">ราคาสินค้า</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ราคาขาย1"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel value="ราคาขาย1" control={<Radio />} label="ราคาขาย1" />
                <FormControlLabel value="ราคาขาย2" control={<Radio />} label="ราคาขาย2" />
                <FormControlLabel value="ราคาขาย3" control={<Radio />} label="ราคาขาย3" />
                <FormControlLabel value="ราคาขาย4" control={<Radio />} label="ราคาขาย4" />
                <FormControlLabel value="ราคาขาย5" control={<Radio />} label="ราคาขาย5" />
              </RadioGroup>
            </Grid> */}
            <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                บวกเพิ่ม %
              </Typography>
              <TextField
                autoComplete="short-description"
                name="interest"
                required
                fullWidth
                id="interest"
                label="บวกเพิ่ม %"
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
                วันที่เริ่ม
              </Typography>
              <TextField
                autoComplete="short-description"
                name="datestart"
                required
                fullWidth
                id="datestart"
                label="วันที่เริ่ม"
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
                วันที่สิ้นสุด
              </Typography>
              <TextField
                autoComplete="short-description"
                name="dateend"
                required
                fullWidth
                id="dateend"
                label="วันที่สิ้นสุด"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}></Grid>




            <Grid item xs={12} md={12} lg={10}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                หมายเหตุ
              </Typography>
              <TextareaAutosize
                name="note"
                aria-label="minimum height"
                minRows={3}
                style={{
                  width: "100%",
                  background: '#FFFFFF',
                  border: '1px solid #B1B5C3',
                  borderRadius: '10px',
                  padding: '15px'
                }}
                className="dark-textarea"
              />
            </Grid>

            {/* <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel style={{ marginTop: "30px" }} control={<Checkbox defaultChecked />} label="ยกเลิกบัญชี" />
            </Grid> */}

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
                แก้ไขข้อมูลลูกค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateCustomer;