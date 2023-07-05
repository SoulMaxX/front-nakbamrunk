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

import axios from "axios";

const CreditorDetails = (props) => {
  const { datas } = props


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
                รหัสเจ้าหนี้ : {datas.idcreditor}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ชื่อ:  {datas.name}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ที่อยู่ : {datas.address}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เลขประจำตัวผู้เสียภาษี : {datas.taxnumber}
              </Typography>

              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ผู้ติดต่อ:  {datas.contact}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                Email:  {datas.email}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เบอร์โทรศัพท์:  {datas.tel}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เบอร์แฟกซ์:  {datas.faxnumber}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                Sale:  {datas.sale}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                วงเงิน: {datas.limit}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เครดิตวัน: {datas.creditday}
              </Typography>

              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เครดิตเดือน:  {datas.creditmount}
              </Typography>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ชำระสิ้นเดือน:  {datas.payinmounth == true ? "ใช่" : ""}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ตัดวันที่:  {(datas.datecut != null) ? new Date(datas.datecut).toLocaleDateString("th-TH") : ""}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                บวกเพิ่ม %: {datas.interest}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                วันที่เริ่ม:  {(datas.datestart != null) ? new Date(datas.datestart).toLocaleDateString("th-TH") : ""}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                วันที่สิ้นสุด:  {(datas.dateend != null) ? new Date(datas.dateend).toLocaleDateString("th-TH") : ""}
              </Typography>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หมายเหตุ: {datas.note}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CreditorDetails;
