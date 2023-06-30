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

const EditProduct = () => {
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  const { id } = router.query
  const [datas, setDatas] = React.useState('')

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/product/get_product?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => setDatas(result.data))
  }, [id])

  console.log(datas)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.put(`${process.env.NEXT_PUBLIC_API}/product/update_product?id=` + id, data, {
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
    setDatas({ ...datas, [event.target.name]: event.target.value });
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขสินค้า</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>แก้ไขสินค้า</li>
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
            แก้ไขสินค้า
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
                onChange={handleChange}
                value={datas.name ?? ''}
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
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
                onChange={handleChange}
                value={datas.initials ?? ''}
                autoComplete="product-name"
                name="initials"
                required
                fullWidth
                id="initials"
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
                onChange={handleChange}
                value={datas.realnum ?? ''}
                autoComplete="short-description"
                name="realnum"
                required
                fullWidth
                id="realnum"
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
                onChange={handleChange}
                value={datas.facnum ?? ''}
                autoComplete="short-description"
                name="facnum"
                required
                fullWidth
                id="facnum"
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
                onChange={handleChange}
                value={datas.sizeprod ?? ''}
                autoComplete="short-description"
                name="sizeprod"
                required
                fullWidth
                id="sizeprod"
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
                onChange={handleChange}
                value={datas.model ?? ''}
                autoComplete="short-description"
                name="model"
                required
                fullWidth
                id="model"
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
                onChange={handleChange}
                value={datas.brand ?? ''}
                autoComplete="short-description"
                name="brand"
                required
                fullWidth
                id="brand"
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
                onChange={handleChange}
                value={datas.company ?? ''}
                autoComplete="short-description"
                name="company"
                required
                fullWidth
                id="company"
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
                onChange={handleChange}
                value={datas.real ?? ''}
                autoComplete="short-description"
                name="real"
                required
                fullWidth
                id="real"
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
                onChange={handleChange}
                value={datas.subUnit ?? ''}
                autoComplete="short-description"
                name="subUnit"
                required
                fullWidth
                id="subUnit"
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
                onChange={handleChange}
                value={datas.bigUnit ?? ''}
                autoComplete="short-description"
                name="bigUnit"
                required
                fullWidth
                id="bigUnit"
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
                onChange={handleChange}
                value={datas.contain ?? ''}
                autoComplete="short-description"
                name="contain"
                required
                fullWidth
                id="contain"
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
                onChange={handleChange}
                value={datas.category ?? ''}
                autoComplete="short-description"
                name="category"
                required
                fullWidth
                id="category"
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
                onChange={handleChange}
                value={datas.group ?? ''}
                autoComplete="short-description"
                name="group"
                required
                fullWidth
                id="group"
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
                onChange={handleChange}
                value={datas.note ?? ''}
                autoComplete="short-description"
                name="note"
                required
                fullWidth
                id="note"
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
                onChange={handleChange}
                value={datas.date ?datas.date.slice(0, 10) : ''}
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
                onChange={handleChange}
                value={datas.cost ?? ''}
                autoComplete="ทุนสุทธิ"
                name="cost"
                required
                fullWidth
                id="cost"
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
                onChange={handleChange}
                value={datas.sell1 ?? ''}
                autoComplete="ราคาขาย"
                name="sell1"
                required
                fullWidth
                id="sell1"
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
                onChange={handleChange}
                value={datas.sell2 ?? ''}
                autoComplete="ราคาขาย"
                name="sell2"
                required
                fullWidth
                id="sell2"
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
                แก้ไขสินค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default EditProduct;