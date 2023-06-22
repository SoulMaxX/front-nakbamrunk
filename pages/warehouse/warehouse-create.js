import * as React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
import Paper from '@mui/material/Paper';
import { useRouter } from "next/router";

import dynamic from 'next/dynamic'
import axios from "axios";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

function createData(id, name, quantity, unit, price, discount) {
  return { id, name, quantity, unit, price, discount };
}

const rows = [
  createData(1, 'ถังลม 30 ลิตร', 1, "ถัง", 8500, 5),
  createData(5, 'ค่าส่ง', 1, "", 6500, ""),

];

const CreateWarehouse = () => {
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(`${process.env.NEXT_PUBLIC_API}/warehouse/create_warehouse`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())

    console.log({
      idwarehouse: data.get("idwarehouse"),
      type: data.get("type"),
      namewarehouse: data.get("namewarehouse"),
      address: data.get("address"),
    });
  };

  // Select dropdown
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  };



  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มคลังสินค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มคลังสินค้า</li>
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
            เพิ่มคลังสินค้า
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสคลังสินค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="idwarehouse"
                required
                fullWidth
                id="idwarehouse"
                label="รหัสคลังสินค้า"
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
                ชื่อคลังสินค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="namewarehouse"
                required
                fullWidth
                id="namewarehouse"
                label="ชื่อคลังสินค้า"
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
                autoComplete="product-name"
                name="address"
                required
                fullWidth
                id="address"
                label="ที่อยู่"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}  >
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ประเภทคลัง
              </Typography>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    name="type"
                    id="type"
                    value={type}
                    // label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={"+Vat"}>+Vat</MenuItem>
                    <MenuItem value={"ไม่Vat"}>ไม่Vat</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
                เพิ่มคลังสินค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateWarehouse;