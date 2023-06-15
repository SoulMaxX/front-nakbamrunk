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
function createData(date, orderId, name, quantity, unit, price, discount) {
  return { date, orderId, name, quantity, unit, price, discount };
}

const rows = [
  createData("2/6/2566", 1, 'ถังลม 30 ลิตร', 1, "ถัง", 8500, ""),
  createData("3/6/2566", 5, 'ค่าส่ง', 1, "", 6500, ""),

];

const ReportCustomerDetails = () => {
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

              <Typography fontWeight="500" fontSize="16px" mb="10px">
                ชื่อลูกคค้า : บจ. อุบล-เขมราฐ
              </Typography>
              <Typography fontWeight="500" fontSize="16px" mb="10px">
                เบอร์โทรศัพท์: 0898955929
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

                <TableContainer >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table" className="dark-table">
                    <TableHead sx={{ background: "#F7FAFF" }}>
                      <TableRow>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}}>วันที่ใบสั่งขาย</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">รหัสใบสั่งขาย</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">รายการสินค้า</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">จำนวน</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">หน่วย</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">ราคา</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">ส่วนลด</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">ลดรวม</TableCell>
                        <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">จำนวนเงิน</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} component="th" scope="row">{row.date}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.orderId}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.name}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.quantity}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.unit}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.price}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.discount}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{row.price * (row.discount / 100)}</TableCell>
                          <TableCell sx={{ borderBottom: "1px solid #F7FAFF"}} align="right">{(row.quantity * row.price) - row.price * (row.discount / 100)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {/* <Grid item xs={12} md={12} lg={12}>


                <Typography margin={"20px"} align="end" fontSize="15px" fontWeight="500" mb="15px">
                  ลดรวม 0 บาท
                </Typography>
                <Typography margin={"20px"} align="end" fontSize="15px" fontWeight="500" mb="15px">
                  ยอดรวมทั้งสิ้น 15000 บาท
                </Typography>
                <Typography margin={"20px"} align="end" fontSize="15px" fontWeight="500" mb="15px">
                  ยอดรวมทั้งสิ้น 0 บาท
                </Typography>
                <Typography margin={"20px"} align="end" fontSize="15px" fontWeight="500" mb="15px">
                  ยอดรวมทั้งสิ้น 15000 บาท
                </Typography>
                <Typography margin={"20px"} align="end" fontSize="15px" fontWeight="500" mb="15px">
                  ยกเว้นภาษี 0.00 บาท
                </Typography>
              </Grid> */}


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

                    {/* <TableRow
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
                        0 บาท
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
                        15,000 บาท
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
                        0 บาท
                      </TableCell>
                    </TableRow> */}

                    <TableRow >
                      <TableCell
                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        ยอดรวมทั้งสิ้น:   15,000 บาท
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        align="right"
                        sx={{
                          borderBottom: "1px solid #F7FAFF",
                          fontSize: "16px",
                          padding: "8px 10px",
                          fontWeight: '500'
                        }}
                      >
                        รวมจำนวน:   2
                      </TableCell>
                    </TableRow>

                    {/* <TableRow
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
                    </TableRow> */}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* <Button
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
                พิมพ์ใบสั่งขาย
              </Button> */}

            </Box>
          </Grid>
        </Grid>




      </Card>
    </>
  );
};

export default ReportCustomerDetails;
