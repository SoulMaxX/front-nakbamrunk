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

const EditOfferSell = () => {
  const [open, setOpen] = React.useState(false);
  const [creditor, setCreditor] = React.useState([]);
  const [creditorDetail, setCreditorDetail] = React.useState('');

  const [cart, setCart] = React.useState([]);
  const [addproduct, setAddProduct] = React.useState([]);
  const [discount, setDiscount] = React.useState('');
  const [total, setTotal] = React.useState(0);
  const [totalNewProd, setTotalNewProd] = React.useState(0);
  const [vat, setVat] = React.useState(0);

  const [datas, setDatas] = React.useState('');
  const router = useRouter()
  const { id } = router.query

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
    data.append("creditorId", creditorDetail[0].id)
    data.append("product", JSON.stringify(cart))
    // data.append("addproduct", JSON.stringify(otherProd))
    data.append("total", ((Number(total == 0 ? datas.total : total) + Number(totalNewProd))).toFixed(2))

    axios.post(`${process.env.NEXT_PUBLIC_API}/buy/update_buyorder?id=` + id, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      // .then((result) => console.log(result))
    .then(() => router.back())

    console.log({
      addproduct: data.get("product"),
      vat: data.get("vat"),
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
  const handleRemove = (e, index) => {
    console.log(index)
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
  };


  const handleChangeData = (event) => {
    setDatas({ ...datas, [event.target.name]: event.target.value })
  };

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/creditor/get_allcreditor`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => setCreditor(result.data))
  }, [])

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/buy/get_buyorder?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setDatas(result.data), setCreditorDetail([result.data?.creditor]), setCart(result.data?.prodbuyorders), setOtherProd(result.data?.otherproducts), setTotal(result.data?.total) })
  }, [id])

  const handleChangeVat = (event) => {
    if (event.target.checked == true) {
      setVat(event.target.value)
      setDatas({ ...datas, vat: event.target.value })
    } else {
      setDatas({ ...datas, vat: 0 })
      setVat(0)
    }
  }



  const handlePrice = (event, id) => {
    const exist = cart.find((x) => x.id === id);
    setCart(cart.map(x => x.id === id ? { ...exist, price: Number(event.target.value) } : x))

  };

  let table = typeof window != "undefined" ? document.getElementById('item') : "";
  let sum = 0

  React.useEffect(() => {
    for (let index = 1; index < table.rows.length; index++) {
      let price = isNaN(Number(table.rows[index].cells[5].innerText)) ? 0 : Number(table.rows[index].cells[5].innerText)
      sum = price + sum;


    }
    setTotal(sum)
  }, [cart, discount])

  let sumNewProd = 0
  React.useEffect(() => {

    for (let index = 0; index < otherProd?.length; index++) {
      const sumProd = otherProd[index]?.amount * otherProd[index]?.price
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
  console.log(cart)

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ใบสั่งซื้อ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ใบสั่งซื้อ</li>
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
            แก้ใบสั่งซื้อ
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
                value={creditorDetail[0]?.name ?? ""}
                onChange={(evnet, value) => setCreditorDetail(creditor.filter(cust => cust.name == value))}
                freeSolo
                options={creditor.map((cust) => cust.name)}
                renderInput={(params) => <TextField name="namecustomer" id="namecustomer" InputProps={{ style: { borderRadius: 8 } }} {...params} />}
              />
            </Grid>



            <Grid item xs={12} md={12} lg={2}>
              {/* <FormControlLabel control={<Checkbox checked={vat == 7} value={7} name="vat" onChange={handleChangeVat} />} label="Vat" /> */}

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
                ที่อยุ่ :{creditorDetail[0]?.address} <br />
                Email :{creditorDetail[0]?.email} <br />
                เบอร์โทรศัพท์ :{creditorDetail[0]?.tel} <br />
                เบอร์แฟกซ์ :{creditorDetail[0]?.faxnumber} <br />
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
                disabled={creditorDetail == ""}
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
            {/* <Grid item xs={12} md={12} lg={3} >

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
                disabled={creditorDetail == ""}
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
            </Grid> */}

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
                      {/* <TableCell align="right">คลัง</TableCell> */}
                      <TableCell align="right">ราคา</TableCell>
                      {/* <TableCell align="right">ส่วนลด</TableCell>
                      <TableCell align="right">ลดรวม</TableCell> */}
                      <TableCell align="right">จำนวนเงิน</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart?.map((row) => (
                      <TableRow
                        key={row?.productId ?? row?.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row?.productId ?? row?.id}
                        </TableCell>
                        <TableCell align="right">{row?.product?.name ?? row?.name}</TableCell>
                        <TableCell align="right" sx={{ width: "150px" }}><TextField
                          name={"amount" + (row?.productId ?? row?.id)}
                          id="amount"
                          type="number"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0 }
                          }}
                          // defaultValue={0}
                          value={row?.amount ?? row?.amount}
                          onChange={event => qtyItem(event, row?.id)}
                        /></TableCell>
                        <TableCell align="right">{row?.product?.subUnit ?? row?.subUnit}</TableCell>
                        {/* <TableCell align="right" style={{ ...row?.warehouse <= 10 ? { color: "red" } : "" }} >{row?.warehouse}</TableCell> */}
                        {/* <TableCell align="right">{row?.product?.sell1 ?? row?.sell1}</TableCell> */}
                        <TableCell align="right" sx={{ width: "150px" }}> <TextField
                          name={"price" + row?.id}
                          id="price"
                          type="number"
                          InputProps={{
                            style: { borderRadius: 8 },
                            inputProps: { min: 0 }
                          }}
                          value={row?.price}
                          onChange={event => handlePrice(event, row?.id)}
                        /></TableCell>

                        {/* <TableCell align="right">{(((typeof window !== "undefined") ? document.getElementsByName("discount" + row?.id)[0]?.value / 100 : 0) * ((row?.amount ?? row?.quantity) * (row?.price ?? row?.sell1))).toFixed(2)}</TableCell> */}
                        <TableCell align="right">{(((typeof window !== "undefined") ? (isNaN(document.getElementsByName("price" + row?.id)[0]?.value) ? 0 : document.getElementsByName("price" + row?.id)[0]?.value) : 0) * row?.amount).toFixed(2)}</TableCell>
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

            {otherProd?.map((prod, index) => (
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
                    value={prod?.name ?? ""}
                    onChange={(event) => handleChange(event, index)}
                    autoComplete="product-name"
                    name="name"
                    fullWidth
                    id="name"
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
                    value={prod?.amount ?? ""}
                    onChange={(event) => handleChange(event, index)}
                    autoComplete="product-name"
                    name="amount"
                    fullWidth
                    id="amount"
                    type="number"
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
                    value={prod?.price ?? ""}
                    onChange={(event) => handleChange(event, index)}
                    autoComplete="product-name"
                    name="price"
                    fullWidth
                    id="price"
                    autoFocus
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
                    จำนวนเงิน {prod?.total ?? prod?.price * prod?.amount} บาท
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={2} >
                  <Button
                    onClick={e => handleRemove(e, otherProd.indexOf(prod))}
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


            {/* <Grid item xs={12} md={12} lg={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ยอดรวม {(Number(total) + Number(totalNewProd)).toFixed(2)} บาท
              </Typography>

            </Grid> */}
            {/* <Grid item xs={12} md={12} lg={5} >

              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ภาษี {(((vat / 100)) * (Number(total) + Number(totalNewProd))).toFixed(2)} บาท
              </Typography>
       
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
                ยอดรวมทั้งสิ้น {((Number(total == 0 ? datas.total : total) + Number(totalNewProd))).toFixed(2)} บาท
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
                value={datas?.deliver ?? ""}
                onChange={handleChangeData}
                autoComplete="product-name"
                name="deliver"
                fullWidth
                id="deliver"
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
                value={datas?.paycodition ?? ""}
                onChange={handleChangeData}
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
                value={datas?.credit ?? ""}
                onChange={handleChangeData}
                autoComplete="product-name"
                name="credit"
                required
                fullWidth
                id="credit"
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
                value={datas?.guarantee ?? ""}
                onChange={handleChangeData}
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
                value={datas?.note ?? ""}
                onChange={handleChangeData}
                autoComplete="short-description"
                name="note"
                required
                fullWidth
                id="note"
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
                บันทึก
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
            <ProductsOrder cart={cart} setCart={setCart} handlerClose={handlerClose} creditorDetail={creditorDetail}></ProductsOrder>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default EditOfferSell;