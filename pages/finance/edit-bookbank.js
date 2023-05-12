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
        <h1>แก้ไขบัญชีธนาคาร</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
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
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="ชื่อบัญชี"
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
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="ชื่อธนาคาร"
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
              {/* <TextField
                autoComplete="short-description"
                name="ประเภทบัญชี"
                required
                fullWidth
                id="Short Description"
                label="ประเภทบัญชี"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              /> */}
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={1}
                onChange={handleChange}
              >
                <MenuItem value={1}>ออมทรัพย์</MenuItem>
                <MenuItem value={2}>กระแสรายวัน</MenuItem>
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
                autoComplete="short-description"
                name="เลขบัญชีธนาคาร"
                required
                fullWidth
                id="Short Description"
                label="เลขบัญชีธนาคาร"
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
                  color: "#fff !important",
                  marginRight: "10px"

                }}
              >

                บันทึก
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="danger"

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