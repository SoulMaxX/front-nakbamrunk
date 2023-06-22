import * as React from "react";
import { Box, Checkbox, Fade, FormControlLabel, IconButton, Modal, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, colors } from "@mui/material";
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
import ClearIcon from "@mui/icons-material/Clear";


import dynamic from 'next/dynamic'
import ProductsOrder from "@/components/Sells/ProductsOrder/ProductsOrder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90%",
  maxWidth: '90%',
  width: '100%',
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

function createData(num, id, name,brand, quantity, unit, warehouse, location) {
  return { num, id, name,brand, quantity, unit, warehouse, location };
}

const rows = [
  createData(1, 4622, 'จานคลัช',"DT", 1, "แผ่น", 5, "B30-32"),
  createData(2, "HTP-LR036L", 'ไฟท้าย scania ซ้าย',"DT", 1, "อัน", "50", ""),

];

const CreateOrderSell = () => {
  const [open, setOpen] = React.useState(false);
  const handlerOpen = (e) => {
    setOpen(true);
  }
  const handlerClose = (e) => {
    setOpen(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  const [otherProd, setOtherProd] = React.useState('');

  const handleChange = (event) => {
    setOtherProd({ ...otherProd, [event.target.name]: event.target.value });
  };

  const [discount, setDiscount] = React.useState('');
  const [total, setTotal] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [vat, setVat] = React.useState(0);

  const handleChangeVat = (event) => {
    if (event.target.checked == true) {
      setVat(event.target.value)
    } else {
      setVat(0)
    }
  }
  console.log(vat)



  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เบิกสินค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เบิกสินค้า</li>
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
            เบิกสินค้า
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
                คลัง
              </Typography>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>


            <Grid item xs={12} md={12} lg={3} >

              <Button
                // href="/sell/sell-products"
                // type="submit"
                onClick={handlerOpen}
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
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className="dark-table" id="item">
                  <TableHead>
                    <TableRow>
                      <TableCell>No.</TableCell>
                      <TableCell align="left">รหัสสินค้า / รายการ</TableCell>
                      <TableCell align="left">ยี่ห้อ</TableCell>
                      <TableCell align="right">จำนวน</TableCell>
                      <TableCell align="right">หน่วย</TableCell>
                      <TableCell align="right">จำนวนสินค้าคงเหลือ</TableCell>
                      <TableCell align="right">ตำแหน่ง</TableCell>
                      <TableCell align="right">หมายเหตุ</TableCell>                 
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (

                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="left">{row.num}</TableCell>
                        <TableCell align="left">{row.id}<br/>{row.name} </TableCell>
                        <TableCell align="left">{row.brand}</TableCell>
                        <TableCell align="right" sx={{ width: "100px" }}> <TextField
                          name={"discount" + row.id}
                          id="discount"
                          type="number"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0, max: 100 }
                          }}
                        // onChange={event => handleDiscount(event, row.id)}
                        /></TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right" style={{ ...row.warehouse <= 10 ? { color: "red" } : "" }} >{row.warehouse}</TableCell>
                        <TableCell align="right"  >{row.location}</TableCell>
                        <TableCell align="right" sx={{ width: "300px" }}> <TextField
                          name="note" 
                          id="note"
                          type="text"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0, max: 100 }
                          }}
                        // onChange={event => handleDiscount(event, row.id)}
                        /></TableCell>
                        <TableCell align="center" ><Button>ลบ</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
                วันที่เบิกสินค้า
              </Typography>
              <TextField
                autoComplete="short-description"
                name="วันที่เบิกสินค้า"
                required
                fullWidth
                id="Short Description"
                // label="วันที่เบิกสินค้า"
                type="date"
                lang="th-TH"
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
                ชื่อผู้เบิก
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="ชื่อผู้เบิก"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
             */}

            {/* <Grid item xs={12} md={12} lg={12}>
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
                เพิ่มใบเบิกสินค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handlerClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#EDEFF5",
                borderRadius: "8px",
                padding: "20px 20px",
              }}
              className="bg-black"
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                สินค้า
              </Typography>
              <IconButton
                aria-label="remove"
                size="small"
                onClick={handlerClose}
              >
                <ClearIcon />
              </IconButton>

            </Box>
            <ProductsOrder></ProductsOrder>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default CreateOrderSell;