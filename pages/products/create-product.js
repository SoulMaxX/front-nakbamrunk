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

const CreateProduct = () => {
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  const [datas, setDatas] = React.useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(`${process.env.NEXT_PUBLIC_API}/product/create_product`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())

    console.log({
      date: data.get("date"),
      nameprod: data.get("nameprod"),
      prodpic: data.get("prodpic"),
      barcodepic: data.get("barcodepic"),
    });
  };

  // Select dropdown
  const [categorySelect, setCategorySelect] = React.useState('');
  const handleChange = (event) => {
    if (event.target.name == "photobarcode" || event.target.name == "photoproduct") {
      setDatas({ ...datas, [event.target.name]: event.target.files[0].name });
    } else {
      setDatas({ ...datas, [event.target.name]: event.target.value });
    }
  };

  console.log(datas)
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มสินค้า</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>เพิ่มสินค้า</li>
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
          <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
            เพิ่มสินค้า
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={9}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อสินค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
                label="ชื่อสินค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อย่อ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="initials"
                required
                fullWidth
                id="initials"
                label="ชื่อย่อ"
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
                เบอร์แท้
              </Typography>
              <TextField
                autoComplete="short-description"
                name="realnum"
                required
                fullWidth
                id="realnum"
                label="เบอร์แท้"
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
                เบอร์โรงงาน
              </Typography>
              <TextField
                autoComplete="short-description"
                name="facnum"
                required
                fullWidth
                id="facnum"
                label="เบอร์โรงงาน"
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
                ขนาดสินค้า
              </Typography>
              <TextField
                autoComplete="short-description"
                name="sizeprod"
                required
                fullWidth
                id="sizeprod"
                label="ขนาดสินค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รุ่น
              </Typography>
              <TextField
                autoComplete="short-description"
                name="model"
                required
                fullWidth
                id="model"
                label="รุ่น"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ยี่ห้อ
              </Typography>
              <TextField
                autoComplete="short-description"
                name="brand"
                required
                fullWidth
                id="brand"
                label="ยี่ห้อ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                บริษัท
              </Typography>
              <TextField
                autoComplete="short-description"
                name="company"
                required
                fullWidth
                id="company"
                label="บริษัท"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                แท้
              </Typography>
              <TextField
                autoComplete="short-description"
                name="real"
                required
                fullWidth
                id="real"
                label="แท้"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                หน่วยย่อย
              </Typography>
              <TextField
                autoComplete="short-description"
                name="subUnit"
                required
                fullWidth
                id="subUnit"
                label="หน่วยย่อย"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                หน่วยใหญ่
              </Typography>
              <TextField
                autoComplete="short-description"
                name="bigUnit"
                required
                fullWidth
                id="bigUnit"
                label="หน่วยใหญ่"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                บรรจุ
              </Typography>
              <TextField
                autoComplete="short-description"
                name="contain"
                required
                fullWidth
                id="contain"
                label="บรรจุ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>



            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                หมวด
              </Typography>
              <TextField
                autoComplete="short-description"
                name="category"
                required
                fullWidth
                id="category"
                label="หมวด"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                กลุ่ม
              </Typography>
              <TextField
                autoComplete="short-description"
                name="group"
                required
                fullWidth
                id="group"
                label="กลุ่ม"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
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
              <TextField
                autoComplete="short-description"
                name="note"
                required
                fullWidth
                id="note"
                label="หมายเหตุ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            {/* <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                คงเหลือ
              </Typography>
              <TextField
                autoComplete="short-description"
                name="คงเหลือ"
                required
                fullWidth
                id="Short Description"
                label="คงเหลือ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                วันที่สินค้าเข้า
              </Typography>
              <TextField
                autoComplete="short-description"
                name="date"
                required
                fullWidth
                id="date"
                // label="วันที่สินค้าเข้า"
                type="date"
                // lang="th-TH"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}

            {/* <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Category
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categorySelect}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Laptop</MenuItem>
                  <MenuItem value={20}>Camera</MenuItem>
                  <MenuItem value={30}>Smart Watch</MenuItem>
                  <MenuItem value={30}>iPhone</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}

            {/* <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ทุนสุทธิ
              </Typography>
              <TextField
                autoComplete="ทุนสุทธิ"
                name="cost"
                required
                fullWidth
                id="cost"
                label="$0"
                type="number"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ราคาปลีก
              </Typography>
              <TextField
                autoComplete="ราคาขาย"
                name="sell1"
                required
                fullWidth
                id="sell1"
                label="$0"
                type="number"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ราคาส่ง
              </Typography>
              <TextField
                autoComplete="ราคาขาย2"
                name="sell2"
                required
                fullWidth
                id="sell2"
                label="$0"
                type="number"

                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            



            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รูปสินค้า
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-image"
                name="photoproduct"
                required
                fullWidth
                id="photoproduct"
                type="file"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />

              {/* <Box 
                sx={{
                  mt: '15px'
                }}
              >
                <img 
                  src="/images/product1.png" 
                  alt="product" 
                  wisth="55px"
                  className='mr-10px'
                />
              </Box> */}
            </Grid>
            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Barcode สินค้าเก่า
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-image"
                name="photobarcode"
                required
                fullWidth
                id="photobarcode"
                type="file"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />

              {/* <Box 
                sx={{
                  mt: '15px'
                }}
              >
                <img 
                  src="/images/product1.png" 
                  alt="product" 
                  wisth="55px"
                  className='mr-10px'
                />
              </Box> */}
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
                }}
                disabled={datas.photoproduct == undefined || datas.photobarcode == undefined}
              >
                <AddIcon
                  sx={{
                    position: "relative",
                    top: "-2px",
                  }}
                  className='mr-5px'

                />{" "}
                เพิ่มสินค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateProduct;