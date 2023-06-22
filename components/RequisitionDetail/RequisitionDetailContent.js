import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "@/components/eCommerce/ProductDetails/ProductDetailsContent.module.css";

import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

function createData(num, id, name,brand, quantity, unit, warehouse, location) {
  return { num, id, name,brand, quantity, unit, warehouse, location };
}

const rows = [
  createData(1, 4622, 'จานคลัช',"DT", 2, "แผ่น", 5, "B30-32"),
  createData(2, "HTP-LR036L", 'ไฟท้าย scania ซ้าย',"DT", 4, "อัน", "50", ""),

];

const RequisitionDetailContent = (props) => {
  const [datas, setDatas] = React.useState('')
  const { id } = props
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/product/get_product?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setDatas(result.data))

  }, [id])

  
  // console.log(datas)
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


          <Grid item xs={12} md={12} lg={7} xl={7}>
            <Box>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                รหัสใบเบิกสินค้า : 12
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                วันที่เบิกสินค้า:  22/6/2566
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ผู้ขอเบิก : Maxx
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                คลิงสินค้า : คลัง1
              </Typography>


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

                <TableContainer>
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
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (

                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="left">{row.num}</TableCell>
                          <TableCell align="left">{row.id}<br />{row.name} </TableCell>
                          <TableCell align="left">{row.brand}</TableCell>
                          <TableCell align="right" sx={{ width: "100px" }}>{row.quantity} </TableCell>
                          <TableCell align="right">{row.unit}</TableCell>
                          <TableCell align="right" style={{ ...row.warehouse <= 10 ? { color: "red" } : "" }} >{row.warehouse}</TableCell>
                          <TableCell align="right"  >{row.location}</TableCell>
                          <TableCell align="right" sx={{ width: "300px" }}>{row.note} </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                // href="/products/history"
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
                Approve
              </Button>


              <Button
                variant="contained"
                color="error"
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
                Cancle
              </Button>

            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default RequisitionDetailContent;
