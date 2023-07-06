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

const CreateOfferSell = () => {
  const router = useRouter()

  const [warehouse, setWarehouse] = React.useState([]);

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(`${process.env.NEXT_PUBLIC_API}/warehouse/create_locationprod`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => router.back())

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  const [warehouseSelect, setWarehouseSelect] = React.useState('');
  const handleChange = (event) => {
    setWarehouseSelect(event.target.value);
  };


  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/warehouse/get_allwarehouse`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setWarehouse(result.data))

  }, [])

  // console.log(warehouse)
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มตำแหน่ง</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มตำแหน่ง</li>
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
            เพิ่มตำแหน่ง
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={4}  >
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

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    name="warehouseId"
                    id="warehouseId"
                    value={warehouseSelect}
                    // label="Age"
                    onChange={handleChange}
                  >
                    {warehouse.map((e) =>
                      <MenuItem key={e.id} value={e.id ?? ""}>{"รหัสคลัง: " + (e.id ?? "") + " " + "ชื่อคลัง: " + (e.namewarehouse ?? "")}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Box>
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
                รหัสตำแหน่งสินค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="idlocation"
                required
                fullWidth
                id="idlocation"
                label="รหัสตำแหน่งสินค้า"
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
                ชื่อตำแหน่งสินค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="locationprod"
                required
                fullWidth
                id="locationprod"
                label="ชื่อตำแหน่งสินค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            {/* <Grid item xs={12} md={12} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสสินค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="รหัสสินค้า"
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
                จำนวน
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="จำนวน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
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
                เพิ่มตำแหน่ง
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateOfferSell;