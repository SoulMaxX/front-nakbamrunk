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
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import axios from "axios";

const ProductDetailsContent = (props) => {
  const [datas, setDatas] = React.useState('')
  const { id } = props
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/customer/get_customer?id=`+id, {
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
          <Grid item xs={12} md={12} lg={5} xl={5}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="product-img-slider"
            >
              <SwiperSlide>
                <img src={`${process.env.NEXT_PUBLIC_API}/product/get_photoproduct?id=`+id} alt="product" />
              </SwiperSlide>

              {/* <SwiperSlide>
                <img src="/images/product-preview.png" alt="product" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/product-preview.png" alt="product" />
              </SwiperSlide> */}
            </Swiper>
          </Grid>

          <Grid item xs={12} md={12} lg={7} xl={7}>
            <Box>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เบอร์แท้ : {datas.realnum}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เบอร์โรงงาน:  {datas.facnum}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หมวด : 1
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ชื่อสินค้า : {datas.nameprod}
              </Typography>

              <Typography fontSize="15px" fontWeight="500" mb="15px">
                รุ่น:  {datas.model}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ยี่ห้อ:  {datas.brand}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                บริษัท:  {datas.company}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                แท้:  {datas.real}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หน่วยย่อย:  {datas.subUnit}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หน่วยใหญ่: {datas.bigUnit}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                บรรจุ: {datas.contain}
              </Typography>

              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ขนาดสินค้า:  {datas.contain}
              </Typography>


              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ทุนสุทธิ:  {datas.cost}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ราคาขาย:  {datas.sell}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ราคาขายปลีก: {datas.retail} 
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ราคาขายรวมภาษี:  {datas.sell*1.07}
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                จำนวนสินค้าคงเหลือ:  10 ชิ้น
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ที่เก็บ: คลัง1
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ตำแหน่งสินค้า: 1
              </Typography>

              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หมายเหตุ:
              </Typography>

              <Button
                variant="contained"
                color="primary"
                href="/products/history"
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
                ประวัติราคาซื้อ-ขาย
              </Button>
              {/* <Button
                variant="contained"
                color="primary"
                href="/products/history-sell"
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
                ประวัติราคาขาย
              </Button> */}
              {/* <br/>
              <Button
                variant="contained"
                color="primary"
                href="/products/"
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
                ค้างรับ
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="/products/send"
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
                ค้างส่ง
              </Button> */}
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
                พิมพ์ Barcode
              </Button>
              {/* <Typography fontSize="14px" mb="15px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adlino minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Typography> */}

              {/* <ul className={styles.metaTagList}>
                <li>
                  <span>Category :</span> T-Shirt
                </li>
                <li>
                  <span>Availability :</span> In Stock 10 Items
                </li>
              </ul> */}

              {/* <ul className={styles.socialLink}>
                <li>
                  <span>Share :</span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-facebook-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul> */}

              {/* <Button
                variant="contained"
                startIcon={<ShoppingCartIcon sx={{ color: "#fff !important" }} />}
                sx={{
                  p: "10px 25px",
                  color: "#fff !important"
                }}
              >
                Add To Cart
              </Button> */}
            </Box>
          </Grid>
        </Grid>

        {/* <Box mt={2}>
          <Tabs className="product-details-tabs">
            <TabList>
              <Tab>Description</Tab>
              <Tab>Reviews (3)</Tab>
            </TabList>

            <TabPanel>
              <ProductDescription />
            </TabPanel>

            <TabPanel>
              <ProductReviews />
            </TabPanel>
          </Tabs>
        </Box> */}



      </Card>
    </>
  );
};

export default ProductDetailsContent;
