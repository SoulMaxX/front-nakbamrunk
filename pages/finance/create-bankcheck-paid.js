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
        <h1>เพิ่มเช็คจ่าย</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
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
                name="productName"
                required
                fullWidth
                id="productName"
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
                name="productName"
                required
                fullWidth
                id="productName"
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
                name="productName"
                required
                fullWidth
                id="productName"
                label="เลขที่เช็ค/ตั๋ว"
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
                ลงวันที่
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ลงวันที่"
                required
                fullWidth
                id="Short Description"
                label="ลงวันที่"
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
                จำนวนเงิน
              </Typography>
              <TextField
                autoComplete="short-description"
                name="จำนวนเงิน"
                required
                fullWidth
                id="Short Description"
                label="จำนวนเงิน"
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
                ธนาคาร
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ธนาคาร"
                required
                fullWidth
                id="Short Description"
                label="ธนาคาร"
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

            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รูปพนักงาน
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

            </Grid>  */}


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

export default CreateEmployee;