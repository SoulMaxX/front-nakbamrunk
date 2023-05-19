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

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateProduct = () => {
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
                name="productName"
                required
                fullWidth
                id="productName"
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
                name="shortName"
                required
                fullWidth
                id="shortName"
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
                name="เบอร์แท้"
                required
                fullWidth
                id="Short Description"
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
                name="เบอร์โรงงาน"
                required
                fullWidth
                id="Short Description"
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
                name="ขนาดสินค้า"
                required
                fullWidth
                id="Short Description"
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
                name="รุ่น"
                required
                fullWidth
                id="Short Description"
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
                name="ยี่ห้อ"
                required
                fullWidth
                id="Short Description"
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
                name="บริษัท"
                required
                fullWidth
                id="Short Description"
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
                name="แท้"
                required
                fullWidth
                id="Short Description"
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
                name="หน่วยย่อย"
                required
                fullWidth
                id="Short Description"
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
                name="หน่วยใหญ่"
                required
                fullWidth
                id="Short Description"
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
                name="บรรจุ"
                required
                fullWidth
                id="Short Description"
                label="บรรจุ"
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
                ที่เก็บ
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ที่เก็บ"
                required
                fullWidth
                id="Short Description"
                label="ที่เก็บ"
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
                ที่เก็บ2
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ที่เก็บ2"
                required
                fullWidth
                id="Short Description"
                label="ที่เก็บ2"
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
                กลุ่ม
              </Typography>
              <TextField
                autoComplete="short-description"
                name="กลุ่ม"
                required
                fullWidth
                id="Short Description"
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
                name="หมายเหตุ"
                required
                fullWidth
                id="Short Description"
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
            <Grid item xs={12} md={12} lg={3}>
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
                name="วันที่สินค้าเข้า"
                required
                fullWidth
                id="Short Description"
                // label="วันที่สินค้าเข้า"
                type="date"
                lang="th-TH"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

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

            <Grid item xs={12} md={12} lg={3}>
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
                name="ทุนสุทธิ"
                required
                fullWidth
                id="ทุนสุทธิ"
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
                ราคาขาย
              </Typography>
              <TextField
                autoComplete="ราคาขาย"
                name="ราคาขาย"
                required
                fullWidth
                id="ราคาขาย"
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
                ราคาขายปลีก
              </Typography>
              <TextField
                autoComplete="ราคาขายปลีก"
                name="ราคาขายปลีก"
                required
                fullWidth
                id="ราคาขายปลีก"
                label="$0"
                type="number"
              
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
                Discount Price
              </Typography>
              <TextField
                autoComplete="discount-price"
                name="DiscountPrice"
                required
                fullWidth
                id="DiscountPrice"
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
                Stock
              </Typography>
              <TextField
                autoComplete="stock"
                name="stock"
                required
                fullWidth
                id="stock"
                label="5"
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
                Product Description
              </Typography>
  
              <RichTextEditor
                id="rte"
                controls={[
                  ['bold', 'italic', 'underline', 'link', 'image'],
                  ['unorderedList', 'h1', 'h2', 'h3'],
                  ['sup', 'sub'],
                  ['alignLeft', 'alignCenter', 'alignRight'],
                ]}
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
                Meta Title
              </Typography>
              <TextField
                autoComplete="meta-title"
                name="metaTitle"
                required
                fullWidth
                id="metaTitle"
                label="Meta Title"
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
                Meta Keywords
              </Typography>
              <TextField
                autoComplete="meta-keywords"
                name="metaKeywords"
                required
                fullWidth
                id="metaKeywords"
                label="Meta Keywords"
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
                Meta Description
              </Typography>
  
              <RichTextEditor
                id="rte"
                controls={[
                  ['bold', 'italic', 'underline', 'link', 'image'],
                  ['unorderedList', 'h1', 'h2', 'h3'],
                  ['sup', 'sub'],
                  ['alignLeft', 'alignCenter', 'alignRight'],
                ]}
              />
            </Grid> */}
        
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
                name="productImage"
                required
                fullWidth
                id="productImage"
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
                name="productImage"
                required
                fullWidth
                id="productImage"
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