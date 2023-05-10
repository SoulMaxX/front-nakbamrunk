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

const ProductDetailsContent = () => {
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
                <img src="/images/benz.jpg" alt="product" />
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
              <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
                	รหัสสินค้า : 1
              </Typography>
              <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
                	ชื่อสินค้า : สวิตซ์เปิดไฟหน้า
              </Typography>

              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "15px",
                }}
              >
                <StarIcon sx={{ color: "#FFBC2B", fontSize: 18 }} />
                <StarIcon sx={{ color: "#FFBC2B", fontSize: 18 }} />
                <StarIcon sx={{ color: "#FFBC2B", fontSize: 18 }} />
                <StarIcon sx={{ color: "#FFBC2B", fontSize: 18 }} />
                <StarIcon sx={{ color: "#FFBC2B", fontSize: 18 }} />

                <Typography as="h4" fontSize="13px" className="ml-1">
                  5.0 (61 votes)
                </Typography>
              </Box> */}

              {/* <Typography fontSize="15px" fontWeight="500" mb="15px">
                Price:{" "}
                <del
                  style={{
                    fontSize: "12px",
                    color: "#95959d",
                  }}
                  className='mr-5px ml-5px'
                >
                  $200
                </del>{" "}
                $150
              </Typography> */}

              <Typography fontSize="15px" fontWeight="500" mb="15px">
                รุ่น:  Benz IBC
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ยี่ห้อ:  DT
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                บริษัท:  DT
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                แท้:  N
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หน่วยย่อย:  อัน
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หน่วยใหญ่:  
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                บรรจุ:  
              </Typography>
             
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เบอร์แท้: 
              </Typography>
             
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                เบอร์โรงงาน:  4.61992
              </Typography>
             
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ทุนสุทธิ:  625.00
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ราคาขาย:  980.00
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                ราคาขายรวมภาษี:  1050.00
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                จำนวนสินค้า:  10 ชิ้น
              </Typography>
              <Typography fontSize="15px" fontWeight="500" mb="15px">
                หมายเหตุ:
              </Typography>

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
