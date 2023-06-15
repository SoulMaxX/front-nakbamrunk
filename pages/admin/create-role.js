import * as React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
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

const CreateRole = () => {
  const router = useRouter()

const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_API}/role/create_role`,datas, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(()=> router.back())
  
  };

  // Select dropdown
  const [datas, setDatas] = React.useState('');
  const handleChange = (event) => {
    if (event.target.checked == true || event.target.name =='name') {
      setDatas({ ...datas, [event.target.name]: event.target.value });
    } else {
      setDatas({ ...datas, [event.target.name]: 0 });
    }
  };

  console.log(datas);
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มบทบาท</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มบทบาท</li>
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
                ชื่อบทบาท
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
                label="ชื่อบทบาท"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
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
                เมนูการซื้อ
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuBuy1" onChange={handleChange}/>} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuBuy2" onChange={handleChange}/>} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuBuy3" onChange={handleChange}/>} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuBuy4" onChange={handleChange}/>} label="Delete" />
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
                เมนูการขาย
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuSell1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuSell2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuSell3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuSell4" onChange={handleChange} />} label="Delete" />
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
                จัดการสินค้า
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuProduct1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuProduct2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuProduct3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuProduct4" onChange={handleChange} />} label="Delete" />
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
                จัดการคลังสินค้า
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuWarehouse1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuWarehouse2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuWarehouse3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuWarehouse4" onChange={handleChange} />} label="Delete" />
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
                ลูกค้า
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuCustomer1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuCustomer2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuCustomer3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuCustomer4" onChange={handleChange} />} label="Delete" />
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
                เจ้าหนี้
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuCreditor1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuCreditor2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuCreditor3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuCreditor4" onChange={handleChange} />} label="Delete" />
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
                การเงิน
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuFinance1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuFinance2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuFinance3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuFinance4" onChange={handleChange} />} label="Delete" />
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
                ธุรการ
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuEmployee1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuEmployee2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuEmployee3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuEmployee4" onChange={handleChange} />} label="Delete" />
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
                จัดการระบบ
              </Typography>
              <FormControlLabel control={<Checkbox value={1} name="menuSystem1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox value={1} name="menuSystem2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox value={1} name="menuSystem3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox value={1} name="menuSystem4" onChange={handleChange} />} label="Delete" />
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
                เพิ่มบทบาท
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateRole;