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

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateEmployee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  const [categorySelect, setCategorySelect] = React.useState('');
  const handleChange = (event) => {
    setCategorySelect(event.target.value);
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มข้อมูลลูกค้า</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>เพิ่มข้อมูลลูกค้า</li>
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
                ชื่อ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
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
                name="productName"
                required
                fullWidth
                id="productName"
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
                name="productName"
                required
                fullWidth
                id="productName"
                label="เลขประจำตัวผู้เสียภาษี"
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
                ผู้ติดต่อ
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ผู้ติดต่อ"
                required
                fullWidth
                id="Short Description"
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
                name="Email"
                required
                fullWidth
                id="Short Description"
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
                name="เบอร์โทรศัพท์"
                required
                fullWidth
                id="Short Description"
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
                name="เบอร์แฟกซ์"
                required
                fullWidth
                id="Short Description"
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
                ที่อยู่
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ที่อยู่"
                required
                fullWidth
                id="Short Description"
                label="ที่อยู่"
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
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sales"
                // onChange={handleChange}
                defaultValue={1}
              >
                <MenuItem value={1}>Test</MenuItem>
                <MenuItem value={2}>ก้องภพ</MenuItem>
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
                name="วงเงิน"
                required
                fullWidth
                id="Short Description"
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
                name="เครดิตวัน"
                required
                fullWidth
                id="Short Description"
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
                name="เครติดเดือน"
                required
                fullWidth
                id="Short Description"
                label="เครติดเดือน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel style={{ marginTop: "30px" }} control={<Checkbox defaultChecked />} label="ชำระสิ้นเดือน" />
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
                ตัดวันที่
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ตัดวันที่"
                required
                fullWidth
                id="Short Description"
                label="ตัดวันที่"
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
                บวกเพิ่ม %
              </Typography>
              <TextField
                autoComplete="short-description"
                name="บวกเพิ่ม"
                required
                fullWidth
                id="Short Description"
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
                name="วันที่เริ่ม"
                required
                fullWidth
                id="Short Description"
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
                name="วันที่สิ้นสุด"
                required
                fullWidth
                id="Short Description"
                label="วันที่สิ้นสุด"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            

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
                เพิ่มข้อมูลลูกค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateEmployee;