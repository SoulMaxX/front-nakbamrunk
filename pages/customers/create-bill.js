import * as React from "react";
import { Box, Checkbox, FormControlLabel, ListItemText, OutlinedInput } from "@mui/material";
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

const CreateBill = () => {

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  // const [categorySelect, setCategorySelect] = React.useState('');
  // const handleChange = (event) => {
  //   setCategorySelect(event.target.value);
  // };
  const [billVat, setBillVat] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBillVat(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [billNoVat, setBillNoVat] = React.useState([]);

  const handleChangeNoVat = (event) => {
    const {
      target: { value },
    } = event;
    setBillNoVat(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  console.log(billVat)
  const bill = ["รหัสบิล" + 1 + " ยอดรวม 5,000 บาท", "รหัสบิล" + 2 + " ยอดรวม 15,000 บาท"]
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มใบวางบิลลูกหนี้</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มใบวางบิลลูกหนี้</li>
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
                รหัสใบวางบิลลูกหนี้
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="รหัสใบวางบิลลูกหนี้"
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
                ชื่อลูกค้า
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="ชื่อลูกค้า"
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
                ชื่อลูกค้า :
              </Typography>
              
            </Grid> */}



            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                บิลVat :
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Vat</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={billVat}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {bill.map(result =>
                  (
                    <MenuItem key={result} value={result}>
                      <Checkbox checked={billVat.indexOf(result) > -1} />
                      <ListItemText primary={result} />
                    </MenuItem>
                  )
                  )}

                </Select>
              </FormControl>


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
                บิลไม่Vat :
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Vat</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={billNoVat}
                  onChange={handleChangeNoVat}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {bill.map(result =>
                  (
                    <MenuItem key={result} value={result}>
                      <Checkbox checked={billNoVat.indexOf(result) > -1} />
                      <ListItemText primary={result} />
                    </MenuItem>
                  )
                  )}

                </Select>
              </FormControl>


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
                จำนวนบิล :
              </Typography>

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
                ยอดรวม :
              </Typography>

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
                ค่าภาษี :
              </Typography>

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
                ค่าขนส่ง
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ค่าขนส่ง"
                required
                fullWidth
                id="Short Description"
                label="ค่าขนส่ง"
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
                ยอดรวมทั่งสิ้น :
              </Typography>

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
                ค่าภาษี
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ค่าภาษี"
                required
                fullWidth
                id="Short Description"
                label="ค่าภาษี"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ยอดรวมทั่งสิ้น
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ยอดรวมทั่งสิ้น"
                required
                fullWidth
                id="Short Description"
                label="ยอดรวมทั่งสิ้น"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ผู้รับบิล
              </Typography>
              <TextField
                autoComplete="short-description"
                name="ผู้รับบิล"
                required
                fullWidth
                id="Short Description"
                label="ผู้รับบิล"
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
                นัดชำระเงินวันที่
              </Typography>
              <TextField
                autoComplete="short-description"
                name="นัดชำระเงินวันที่"
                required
                fullWidth
                id="Short Description"
                label="นัดชำระเงินวันที่"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
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
                เพิ่มใบวางบิลลูกหนี้
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateBill;