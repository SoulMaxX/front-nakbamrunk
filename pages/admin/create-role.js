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

import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateRole = () => {
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
        <h1>เพิ่มบทบาท</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
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
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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
              <FormControlLabel control={<Checkbox  />} label="View" />
              <FormControlLabel control={<Checkbox  />} label="Create" />
              <FormControlLabel control={<Checkbox  />} label="Edit" />
              <FormControlLabel control={<Checkbox  />} label="Delete" />
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