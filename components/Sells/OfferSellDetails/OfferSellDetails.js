import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "@/components/eCommerce/ProductDetails/ProductDetailsContent.module.css";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

// import ProductDescription from "./ProductDescription";
// import ProductReviews from "./ProductReviews";
// function createData(id, name, quantity, unit, price, discount) {
//   return { id, name, quantity, unit, price, discount };
// }

// const rows = [
//   createData(1, 'ถังลม 30 ลิตร', 1, "ถัง", 8500, 5),
//   createData(5, 'ค่าส่ง', 1, "", 6500, ""),

// ];

function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const OfferSellDetails = (props) => {
  const { datas } = props
  const [total, setTotal] = React.useState(0)
  const [dc, setDc] = React.useState(0)
  let table = typeof window != "undefined" ? document.getElementById('item') : "";
  let sum = 0
  let dcsum = 0

  // console.log(table.rows?.length)
  // console.log(table.rows[1].cells[7].innerText)
  React.useEffect(() => {
    for (let index = 1; index < table?.rows?.length; index++) {
      // console.log(table?.rows?.length)
      let price = table.rows[index].cells[7].innerText
      let num = Number(price.replace(/\,/g, ''));
      sum = Number(num + sum);
    }
    setTotal(sum)

    for (let index = 1; index < table?.rows?.length; index++) {
      // console.log(table?.rows?.length)
      let price = table.rows[index].cells[6].innerText
      let num = Number(price.replace(/\,/g, ''));
      dcsum = Number(num + dcsum);
    }
    setDc(dcsum)
  }, [datas])

  console.log(datas)
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 4 }}
        >
          {/* <Grid item xs={12} md={12} lg={5} xl={5}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="product-img-slider"
            >
              <SwiperSlide>
                <img src="/images/benz.jpg" alt="product" />
              </SwiperSlide>

            </Swiper>
          </Grid> */}

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
                รหัสใบเสนอราคาขาย : {datas[0]?.id}
              </Typography>
              <Typography fontWeight="500" fontSize="16px" mb="10px">
                วันที่ : {new Date(datas[0]?.createdAt).toLocaleDateString("th-TH")}
              </Typography>
              <Typography fontWeight="500" fontSize="16px" mb="10px">
                รหัสลูกค้า : {datas[0]?.customer?.name}
              </Typography>
              <Typography fontWeight="500" fontSize="16px" mb="10px">
                เบอร์โทรศัพท์: {datas[0]?.customer?.tel}
              </Typography>

              <Grid item xs={12} md={12} lg={12}>

                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
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
                        <TableCell align="right">ราคา</TableCell>
                        <TableCell align="right">ส่วนลด</TableCell>
                        <TableCell align="right">ลดรวม</TableCell>
                        <TableCell align="right">จำนวนเงิน</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {datas[0]?.prodsellquotations.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.product.id}
                          </TableCell>
                          <TableCell align="right">{row.product.name}</TableCell>
                          <TableCell align="right">{numberWithCommas(row.quantity)}</TableCell>
                          <TableCell align="right">{row.product.subUnit}</TableCell>
                          <TableCell align="right">{numberWithCommas(row.price)}</TableCell>
                          <TableCell align="right">{numberWithCommas(row.discount)}</TableCell>
                          <TableCell align="right">{numberWithCommas((row.quantity * row.price) * (row.discount / 100))}</TableCell>
                          <TableCell align="right">{numberWithCommas((row.quantity * row.price) - (row.quantity * row.price) * (row.discount / 100))}</TableCell>
                        </TableRow>
                      ))}
                      {datas[0]?.otherproducts.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {/* {row?.id} */}
                          </TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{numberWithCommas(row.quantity)}</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">{numberWithCommas(row.price)}</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">{numberWithCommas(row.quantity * row.price)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>


              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                }}
              >
                <Table
                  // sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  className="dark-table"
                >
                  <TableBody>

                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        colSpan={3}
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500',
                          width: "500px"
                        }}
                      >
                        ลดรวม :
                      </TableCell>

                      <TableCell

                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        {numberWithCommas(Number(dc).toFixed(2))} บาท
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        colSpan={3}
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        จำนวนเงินรวม  :
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        {numberWithCommas(Number(total).toFixed(2))} บาท
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        colSpan={3}
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        ภาษี  :
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        {numberWithCommas(Number(total * ((datas[0]?.vat ?? 0) / 100)).toFixed(2))} บาท
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        colSpan={3}
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        ยอดรวมทั้งสิ้น  :
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        {numberWithCommas(Number(datas[0]?.total).toFixed(2))} บาท
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        colSpan={3}
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500',
                          // color: "#000"
                        }}
                      >
                        ยกเว้นภาษี  :
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500',
                          // color: "#000"
                        }}
                      >
                        0.00 บาท
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ส่งมอบใน: {datas[0]?.deliver}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เงื่อนไขการชำระ: {datas[0]?.paycodition}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เครดิต: {datas[0]?.credit}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                รับประกัน:  {datas[0]?.guarantee}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ชื่อผู้เสนอ:   {datas[0]?.nameproponent}
              </Typography>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หมายเหตุ: {datas[0]?.note}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: '30px',
                  mt: '10px',
                  p: '10px 30px',
                  fontSize: '14px',
                  color: "#fff !important",
                }}
                className="mr-10px"
              >
                พิมพ์ใบเสนอขาย
              </Button>

            </Box>
          </Grid>
        </Grid>




      </Card>
    </>
  );
};

export default OfferSellDetails;
