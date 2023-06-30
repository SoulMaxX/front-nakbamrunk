import * as React from "react";
import { Box, Checkbox, Fade, FormControlLabel, FormLabel, IconButton, Modal, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, colors } from "@mui/material";
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

function createData(id, name, quantity, unit, warehouse, price, discount) {
  return { id, name, quantity, unit, warehouse, price, discount };
}

const rows = [
  createData(1, 'ถังลม 30 ลิตร', 1, "ถัง", 5, 8500, 5),
  createData(5, 'ค่าส่ง', 1, "", "", 6500, ""),

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

  const handleDiscount = (event, id) => {
    let name = "dc" + id
    setDiscount({
      ...discount,
      [name]: event.target.value
    })
  };
  if (typeof window != "undefined") {
    let table = document.getElementById('item');
    let sum = 0

    React.useEffect(() => {
      for (let index = 1; index < table.rows.length; index++) {
        sum = Number(table.rows[index].cells[8].innerText) + sum;
      }
      // console.log(sum)
      setTotal(sum)
    }, [discount])
  }

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มใบสั่งขาย</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มใบสั่งขาย</li>
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
            เพิ่มใบสั่งขาย
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            {/* <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รหัสใบสั่งขาย
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="รหัสใบสั่งขาย"
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
            {/* <Grid item xs={12} md={12} lg={4}>
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
                รหัสใบPO
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="รหัสใบPO"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>


            <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel control={<Checkbox value={7} name="vat" onChange={handleChangeVat} />} label="Vat" />
              {/* <FormControlLabel control={<Checkbox value={1} name="no-vat" onChange={handleChange} />} label="ไม่Vat" /> */}

              {/* <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleChange}
              >
                <FormControlLabel value="vat"  control={<Radio />}label="Vat"  />
                <FormControlLabel value="no-vat"  control={<Radio />} label="ไม่Vat" />
              </RadioGroup> */}
            </Grid>
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
                ส่วนลด
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
                required
                fullWidth
                id="shortName"
                label="ส่วนลด"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>*/}


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
                      <TableCell>รหัสสินค้า</TableCell>
                      <TableCell align="right">รายการ</TableCell>
                      <TableCell align="right">จำนวน</TableCell>
                      <TableCell align="right">หน่วย</TableCell>
                      <TableCell align="right">คลัง</TableCell>
                      <TableCell align="right">ราคา</TableCell>
                      <TableCell align="right">ส่วนลด</TableCell>
                      <TableCell align="right">ลดรวม</TableCell>
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
                        <TableCell align="right" style={{ ...row.warehouse <= 10 ? { color: "red" } : "" }} >{row.warehouse}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right" sx={{ width: "100px" }}> <TextField
                          name={"discount" + row.id}
                          id="discount"
                          type="number"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0, max: 100 }
                          }}
                          onChange={event => handleDiscount(event, row.id)}
                        /></TableCell>


                        {/* {typeof window !== "undefined" ? document.getElementsByName("discount" + row.id)[0].value : ""} */}
                        <TableCell align="right">{(((typeof window !== "undefined") ? document.getElementsByName("discount" + row.id)[0].value / 100 : 0) * row.price).toFixed(2)}</TableCell>
                        <TableCell align="right">{((row.quantity * row.price) - row.price * ((typeof window !== "undefined") ? document.getElementsByName("discount" + row.id)[0].value / 100 : 0)).toFixed(2)}</TableCell>
                        <TableCell align="center" ><Button>เพิ่ม</Button><Button>ลด</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
                สิ้นค้าอื่นๆ
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-name"
                name="othernameprod"
                fullWidth
                id="othernameprod"
                label="ชื่อสินค้า"
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
                onChange={handleChange}
                autoComplete="product-name"
                name="otherqty"
                fullWidth
                id="otherqty"
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
                onChange={handleChange}
                autoComplete="product-name"
                name="otherprice"
                fullWidth
                id="otherprice"
                label="ราคา"
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
                จำนวนเงิน {otherProd.otherprice != undefined ? otherProd.otherprice * otherProd.otherqty : 0} บาท
              </Typography>

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
                ยอดรวม {((otherProd.otherprice != undefined ? Number(otherProd.otherprice) * Number(otherProd.otherqty) : 0) + Number(total)).toFixed(2)} บาท
              </Typography>

            </Grid>
            <Grid item xs={12} md={12} lg={5} >

              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ภาษี {(((vat / 100)) * ((otherProd.otherprice != undefined ? Number(otherProd.otherprice) * Number(otherProd.otherqty) : 0) + Number(total))).toFixed(2)} บาท
              </Typography>
              {/* <TextField
                open={false}
                onChange={(e) => setTax(e.target.value)}
                autoComplete="product-name"
                name="shortName"
                fullWidth
                id="shortName"
                label="ภาษี %"
                type="number"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              /> */}
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
                ยอดรวมทั้งสิ้น {(((vat / 100) + 1) * ((otherProd.otherprice != undefined ? Number(otherProd.otherprice) * Number(otherProd.otherqty) : 0) + Number(total))).toFixed(2)} บาท
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
            <Grid item xs={12} md={12} lg={12}>

              <FormControl lg={12}>
                <FormLabel sx={{fontWeight: "500",fontSize: "14px", color: "black"}} id="demo-row-radio-buttons-group-label">ราคาขาย</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="ราคาขาย" />
                  <FormControlLabel value="male" control={<Radio />} label="ราคาขาย1" />
                  <FormControlLabel value="other" control={<Radio />} label="ราคาขาย2" />

                </RadioGroup>
              </FormControl>
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
                ส่งมอบใน
              </Typography>
              <TextField
                autoComplete="product-name"
                name="shortName"
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
                เพิ่มใบสั่งขาย
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