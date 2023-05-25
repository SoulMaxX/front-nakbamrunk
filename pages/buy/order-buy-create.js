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


import dynamic from 'next/dynamic'
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

function createData(id,name, quantity , unit, price, discount) {
  return { id,name, quantity , unit, price, discount };
}

const rows = [
  createData(1,'ถังลม 30 ลิตร', 1,"ถัง", 8500, 5),
  createData(5,'ค่าส่ง', 1, "",6500, ""),
 
];

const CreateOfferSell = () => {
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
        <h1>เพิ่มใบสั่งซื้อ</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>เพิ่มใบสั่งซื้อ</li>
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
            เพิ่มใบสั่งซื้อ
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
                รหัสใบสั่งซื้อ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="รหัสใบสั่งซื้อ"
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
                รหัสSupplier
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="รหัสSupplier"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}></Grid>
            {/* <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสคลัง
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="รหัสคลัง"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            <Grid item xs={12} md={12} lg={2}>
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
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="รหัสสินค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={1}>
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
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="จำนวน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={1}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ราคา
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="ราคา"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            {/* <Grid item xs={12} md={12} lg={1}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ภาษี
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="ภาษี"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}

            <Grid item xs={12} md={12} lg={3} >

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
                  marginTop: "30px"
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

            <Grid item xs={12} md={12} lg={12}>
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
                สินค้า
              </Typography>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className="dark-table">
                  <TableHead>
                    <TableRow>
                      <TableCell>รหัสสินค้า</TableCell>
                      <TableCell align="right">รายการ</TableCell>
                      <TableCell align="right">จำนวน</TableCell>
                      <TableCell align="right">หน่วย</TableCell>
                      <TableCell align="right">ราคา</TableCell>
                      {/* <TableCell align="right">ส่วนลด</TableCell>
                      <TableCell align="right">ลดรวม</TableCell> */}
                      <TableCell align="right">จำนวนเงิน</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        {/* <TableCell align="right">{row.discount}</TableCell>
                        <TableCell align="right">{row.price*(row.discount/100)}</TableCell> */}
                        {/* <TableCell align="right">{(row.quantity*row.price)-row.price*(row.discount/100)}</TableCell> */}
                        <TableCell align="right">{(row.quantity*row.price)}</TableCell>
                        <TableCell align="center"><Button>เพิ่ม</Button><Button>ลด</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
                ยอดรวมทั้งสิ้น 15000 บาท
              </Typography>
              
            </Grid>
            {/* <Grid item xs={12} md={12} lg={1}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ยืนราคา
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                // label="ยืนราคา"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={12} lg={1}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ส่งมอบใน
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="วัน"
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
                เงื่อนไขการชำระ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                // label="เงื่อนไขการชำระ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={1}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เครดิต
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="วัน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={1}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รับประกัน
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                // label="วัน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อผู้เสนอ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="ชื่อผู้เสนอ"
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
                เพิ่มใบสั่งซื้อ
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateOfferSell;