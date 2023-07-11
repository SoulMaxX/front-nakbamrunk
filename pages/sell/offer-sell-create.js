import * as React from "react";
import { Autocomplete, Box, Checkbox, Fade, FormControlLabel, FormLabel, IconButton, Modal, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, colors } from "@mui/material";
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
import axios from "axios";
import { useRouter } from "next/router";

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

const CreateOfferSell = () => {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState([]);
  const [customerDetail, setCustomerDetail] = React.useState('');

  const [cart, setCart] = React.useState([]);
  const [addproduct, setAddProduct] = React.useState([]);
  const [discount, setDiscount] = React.useState('');
  const [total, setTotal] = React.useState(0);
  const [totalNewProd, setTotalNewProd] = React.useState(0);
  const [vat, setVat] = React.useState(0);

  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handlerOpen = (e) => {
    setOpen(true);
  }
  const handlerClose = (e) => {
    setOpen(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("product", JSON.stringify(cart))
    data.append("addproduct", JSON.stringify(otherProd))
    data.append("total",(((vat / 100) + 1) * ( Number(total) + Number(totalNewProd))).toFixed(2))

    axios.post(`${process.env.NEXT_PUBLIC_API}/sell/create_sellquotation`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // .then((result) => console.log(result))
    .then(() => router.back())

    console.log({
      product: data.get("product"),
      addproduct: data.get("addproduct"),
      // password: data.get("password"),
    });

  };

  // console.log(cart);
  // Select dropdown
  const [otherProd, setOtherProd] = React.useState([
    // { othernameprod: "", otherqty: "", otherprice: "", total: 0 }
  ]);


  const handleAdd = (event) => {
    setOtherProd([...otherProd, { name: "", amount: "", price: "", total: 0 }]);
  };
  const handleRemove = (index) => {
    const list = [...otherProd]
    list.splice(index, 1)
    setOtherProd(list)
  };
  const handleChange = (event, index) => {
    const { name, value } = event.target
    const list = [...otherProd]
    list[index][name] = value
    setOtherProd(list);
    list[index]["total"] = list[index].amount * list[index].price
    setOtherProd(list);


    // console.log(list[0].otherqty*list[0].otherprice)
  };

  console.log(otherProd);


  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/customer/get_allcustomer`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => setCustomer(result.data))
  }, [])


  const handleChangeVat = (event) => {
    if (event.target.checked == true) {
      setVat(event.target.value)
    } else {
      setVat(0)
    }
  }

  const handleSellPrice = (event, id) => {
    setCart(cart.map(x => x.id === id ? ({ ...x, price: event.target.value }) : x))
  }

  const handleDiscount = (event, id) => {
    const exist = cart.find((x) => x.id === id);
    setCart(cart.map(x => x.id === id ? { ...exist, discount: Number(event.target.value) } : x))

  };

  let table = typeof window != "undefined" ? document.getElementById('item') : "";
  let sum = 0

  React.useEffect(() => {
    for (let index = 1; index < table.rows.length; index++) {
      let price = isNaN(Number(table.rows[index].cells[8].innerText)) ? cart[index - 1].sell1 : Number(table.rows[index].cells[8].innerText)
      sum = price + sum;
    }
    setTotal(sum)
  }, [cart, discount])

  let sumNewProd = 0
  React.useEffect(() => {

    for (let index = 0; index < otherProd.length; index++) {
      const sumProd = otherProd[index].total
      sumNewProd = sumProd + sumNewProd
      setTotalNewProd(sumNewProd)
    }
  }, [otherProd])

  const qtyItem = (event, id) => {
    const exist = cart.find((x) => x.id === id);
    setCart(cart.map(x => x.id === id ? { ...exist, amount: Number(event.target.value) } : x))
  }
  const deleteItem = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    // if (exist.quantity === 1) {
    setCart(cart.filter(x => x.id !== product.id))
    // } else {
    //   setCart(cart.map(x => x.id === product.id ? { ...exist, quantity: exist.quantity - 1, price: exist.sell1 } : x))
    // }
  }

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มใบเสนอราคา</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มใบเสนอราคา</li>
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
            เพิ่มใบเสนอราคา
          </Typography>

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
                ชื่อลูกค้า
              </Typography>
              {/* <TextField
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
              /> */}
              <Autocomplete
                onChange={(evnet, value) => setCustomerDetail(customer.filter(cust => cust.name == value))}
                freeSolo
                options={customer.map((cust) => cust.name)}
                renderInput={(params) => <TextField name="namecustomer" id="namecustomer" InputProps={{ style: { borderRadius: 8 } }} {...params} />}
              />
            </Grid>



            <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel control={<Checkbox value={7} name="vat" onChange={handleChangeVat} />} label="Vat" />

            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >ข้อมูลลูกค้า<br />
                ที่อยุ่ :{customerDetail[0]?.address} <br />
                Email :{customerDetail[0]?.email} <br />
                เบอร์โทรศัพท์ :{customerDetail[0]?.tel} <br />
                เบอร์แฟกซ์ :{customerDetail[0]?.faxnumber} <br />
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
            </Grid>



            <Grid item xs={12} md={12} lg={3} >

              <Button

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
                disabled={customerDetail == ""}
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
            <Grid item xs={12} md={12} lg={3} >

              <Button

                onClick={handleAdd}
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
                disabled={customerDetail == ""}
              >
                <AddIcon
                  sx={{
                    position: "relative",
                    top: "-2px",
                  }}
                  className='mr-5px'
                />{" "}
                เพิ่มสินค้าอื่น
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
                    {cart.map((row) => (
                      <TableRow
                        key={row?.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row?.id}
                        </TableCell>
                        <TableCell align="right">{row?.name}</TableCell>
                        <TableCell align="right"><TextField
                          name={"amount" + row?.id}
                          id="amount"
                          type="number"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0, max: 100 }
                          }}
                          // defaultValue={0}
                          value={row?.amount}
                        onChange={event => qtyItem(event, row?.id)}
                        /></TableCell>
                        <TableCell align="right">{row?.subUnit}</TableCell>
                        <TableCell align="right" style={{ ...row?.warehouse <= 10 ? { color: "red" } : "" }} >{row?.warehouse}</TableCell>
                        <TableCell align="right">{row?.sell1}</TableCell>
                        <TableCell align="right" sx={{ width: "100px" }}> <TextField
                          name={"discount" + row?.id}
                          id="discount"
                          type="number"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0, max: 100 }
                          }}
                          defaultValue={0}
                          // value={row?.discount}
                          onChange={event => handleDiscount(event, row?.id)}
                        /></TableCell>

                        <TableCell align="right">{(((typeof window !== "undefined") ? document.getElementsByName("discount" + row?.id)[0]?.value / 100 : 0) * (row?.amount * row?.price)).toFixed(2)}</TableCell>
                        <TableCell align="right">{((row?.amount * row?.price) - (row?.price * row?.amount) * ((typeof window !== "undefined") ? document.getElementsByName("discount" + row?.id)[0]?.value / 100 : 0)).toFixed(2)}</TableCell>
                        <TableCell align="center" >
                          {/* <Button onClick={() => increase(row)}>เพิ่ม</Button> */}
                          <Button onClick={() => deleteItem(row)}>ลบ</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {otherProd.map((prod, index) => (
              <Grid key={index} container spacing={2} sx={{ padding: "10px" }}>
                <Grid item xs={12} md={12} lg={3}>
                  <Typography
                    as="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    สินค้าอื่นๆ
                  </Typography>
                  <TextField
                    // value={prod.othernameprod}
                    onChange={(event) => handleChange(event, index)}
                    autoComplete="product-name"
                    name="name"
                    fullWidth
                    id="name"
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
                    onChange={(event) => handleChange(event, index)}
                    autoComplete="product-name"
                    name="amount"
                    fullWidth
                    id="amount"
                    label="จำนวน"
                    type="number"
                    autoFocus
                    defaultValue={0}
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
                    onChange={(event) => handleChange(event, index)}
                    autoComplete="product-name"
                    name="price"
                    fullWidth
                    id="price"
                    label="ราคา"
                    autoFocus
                    defaultValue={0}
                    type="number"
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
                      paddingTop: "50px"
                    }}

                  >
                    จำนวนเงิน {prod.total} บาท
                  </Typography>

                </Grid>
                <Grid item xs={12} md={12} lg={2} >

                  <Button

                    onClick={handleRemove}
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
                    color="error"

                  >

                    ลบ
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={2}>
                </Grid>

              </Grid>
            ))}


            <Grid item xs={12} md={12} lg={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ยอดรวม {( Number(total) + Number(totalNewProd)).toFixed(2)} บาท
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
                ภาษี {(((vat / 100)) * ( Number(total) + Number(totalNewProd))).toFixed(2)} บาท
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
                ยอดรวมทั้งสิ้น {(((vat / 100) + 1) * ( Number(total) + Number(totalNewProd))).toFixed(2)} บาท
              </Typography>

            </Grid>

            {/* <Grid item xs={12} md={12} lg={12}>

              <FormControl lg={12}>
                <FormLabel sx={{ fontWeight: "500", fontSize: "14px", color: "black" }} id="demo-row-radio-buttons-group-label">ราคาขาย</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="ราคาขาย1" />
                  <FormControlLabel value="male" control={<Radio />} label="ราคาขาย2" />
                  <FormControlLabel value="other" control={<Radio />} label="ราคาขาย3" />

                </RadioGroup>
              </FormControl>
            </Grid> */}
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
                name="deliver"
                fullWidth
                id="deliver"
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
                name="paycodition"
                fullWidth
                id="paycodition"
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
                name="credit"
                required
                fullWidth
                id="credit"
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
                name="guarantee"
                required
                fullWidth
                id="guarantee"
                // label="วัน"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
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
            </Grid> */}

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
                name="note"
                required
                fullWidth
                id="note"
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
                เพิ่มใบเสนอราคา
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
            <ProductsOrder cart={cart} setCart={setCart} handlerClose={handlerClose} customerDetail={customerDetail}></ProductsOrder>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default CreateOfferSell;