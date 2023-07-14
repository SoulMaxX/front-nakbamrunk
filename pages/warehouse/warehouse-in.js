import * as React from "react";
import { Autocomplete, Box } from "@mui/material";
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

import dynamic from 'next/dynamic'
import axios from "axios";
import { useRouter } from "next/router";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const WarehouseIn = () => {

  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    data.append('locationprodId', locationSelect)
    data.append('productId', idprod)
    axios.post(`${process.env.NEXT_PUBLIC_API}/warehouse/create_productin`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // .then((result) => console.log(result))
    .then(() => router.back())
    .catch(e => {
      if (e.response.status == 400) { alert(e.response.data.error) }
    })
    // console.log({
    //   warehouseId: data.get("warehouseId"),
    //   locationprodId: data.get("locationprodId"),
    //   productId: data.get("productId"),
    //   amount: data.get("amount"),
    //   note: data.get("note"),
    // });
  };

  // Select dropdown
  const [warehouse, setWarehouse] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [recieve, setRecieve] = React.useState([]);
  const [idprod, setIdProd] = React.useState('');
  const [warehouseSelect, setWarehouseSelect] = React.useState('');
  const [locationSelect, setLocationSelect] = React.useState('');

  const handleWarehouse = (event) => {
    setWarehouseSelect(event.target.value);
    // setWarehouseSelect({[event.target.name]:event.target.value});
  };
  const handleLocation = (event) => {
    setLocationSelect(event.target.value);
  };
  const handleProduct = (event, value) => {
    if(value != null){
      const idprod = value.split(" ")
      setIdProd(idprod[1]);
    }
  };
  console.log(idprod);
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/warehouse/get_allwarehouse`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setWarehouse(result.data) })

    axios.get(`${process.env.NEXT_PUBLIC_API}/product/get_allproduct`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setProduct(result.data) })

    axios.get(`${process.env.NEXT_PUBLIC_API}/buy/get_allprod`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setRecieve(result.data) })

  }, [])
  React.useEffect(() => {

    axios.post(`${process.env.NEXT_PUBLIC_API}/warehouse/get_locationprod_warehouse`, { warehouseId: warehouseSelect }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(result => { setLocation(result.data) })

  }, [warehouseSelect])

  console.log(warehouseSelect);
  console.log(recieve);
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รับสินค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รับสินค้า</li>
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
          {/* <Typography as="h4" fontWeight="500" fontSize="18px" mb="10px">
            รับสินค้า
          </Typography> */}

          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={4}

            >
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
                    // labelId="demo-simple-select-label"
                    name="warehouseId"
                    id="warehouseId"
                    value={warehouseSelect}
                    // label="Age"
                    onChange={handleWarehouse}
                  >
                    {warehouse.map((e) =>
                      <MenuItem key={e.id} value={e.id ?? ""}>{"รหัสคลัง: " + (e.ididwarehouse ?? "") + " " + "ชื่อคลัง: " + (e.namewarehouse ?? "")}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={4}

            >
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ตำแหน่ง
              </Typography>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    name="locationId"
                    id="locationId"
                    value={locationSelect}
                    // label="Age"
                    onChange={handleLocation}
                  >
                    {location.sort((a, b) => (a.id < b.id ? -1 : 1))?.map((e) =>
                      <MenuItem key={e.id} value={e.id ?? ""}>{"รหัสตำแหน่ง: " + (e.idlocation ?? "") + " " + "ชื่อตำแหน่ง: " + (e.locationprod ?? "")}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
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
              <Autocomplete
                onChange={(evnet, value) => handleProduct(evnet, value)}
                freeSolo
                options={recieve.map((item) => "รหัสใบสั่งซื้อ " + item.buyorderId + " ชื่อสินค้า " + item.product.name+"/"+ item.product.brand+"/"+ item.product.model)}
                renderInput={(params) => <TextField name="prodId" id="prodId" InputProps={{ style: { borderRadius: 8 } }} {...params} />}
              />
              {/* <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="รหัสสินค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              /> */}
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
                จำนวนสินค้า
              </Typography>
              <TextField
                autoComplete="short-description"
                name="amount"
                required
                fullWidth
                id="amount"
                label="จำนวนสินค้า"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
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
                วันที่รับสินค้า
              </Typography>
              <TextField
                autoComplete="short-description"
                name="วันที่รับสินค้า"
                required
                fullWidth
                id="Short Description"
                // label="วันที่รับสินค้า"
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
                ชื่อผู้รับ
              </Typography>
              <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="ชื่อผู้รับ"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}
            <Grid item xs={12} md={12} lg={3}>
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
                บันทึก
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default WarehouseIn;