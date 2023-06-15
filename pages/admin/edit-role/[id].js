import * as React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
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
import { useRouter } from "next/router";

import dynamic from 'next/dynamic'
import axios from "axios";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const EditRole = () => {
  const router = useRouter()
  const { id } = router.query

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.NEXT_PUBLIC_API}/role/update_role/` + id, datas, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => router.back())

  };

  const [datas, setDatas] = React.useState('');
  const handleChange = (event) => {
    if (event.target.checked == true || event.target.name == 'name') {
      setDatas({ ...datas, [event.target.name]: event.target.value });
    } else {
      setDatas({ ...datas, [event.target.name]: "0" });
    }
  };





  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/role/get_role_by_id/` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      setDatas({
        ["name"]: result.data.name,
        ["menuBuy1"]: result.data.menuBuy?.view,
        ["menuBuy2"]: result.data.menuBuy?.create,
        ["menuBuy3"]: result.data.menuBuy?.edit,
        ["menuBuy4"]: result.data.menuBuy?.delete,
        ["menuSell1"]: result.data.menuSell?.view,
        ["menuSell2"]: result.data.menuSell?.create,
        ["menuSell3"]: result.data.menuSell?.edit,
        ["menuSell4"]: result.data.menuSell?.delete,
        ["menuProduct1"]: result.data.menuProduct?.view,
        ["menuProduct2"]: result.data.menuProduct?.create,
        ["menuProduct3"]: result.data.menuProduct?.edit,
        ["menuProduct4"]: result.data.menuProduct?.delete,
        ["menuWarehouse1"]: result.data.menuWarehouse?.view,
        ["menuWarehouse2"]: result.data.menuWarehouse?.create,
        ["menuWarehouse3"]: result.data.menuWarehouse?.edit,
        ["menuWarehouse4"]: result.data.menuWarehouse?.delete,
        ["menuCustomer1"]: result.data.menuCustomer?.view,
        ["menuCustomer2"]: result.data.menuCustomer?.create,
        ["menuCustomer3"]: result.data.menuCustomer?.edit,
        ["menuCustomer4"]: result.data.menuCustomer?.delete,
        ["menuCreditor1"]: result.data.menuCreditor?.view,
        ["menuCreditor2"]: result.data.menuCreditor?.create,
        ["menuCreditor3"]: result.data.menuCreditor?.edit,
        ["menuCreditor4"]: result.data.menuCreditor?.delete,
        ["menuFinance1"]: result.data.menuFinance?.view,
        ["menuFinance2"]: result.data.menuFinance?.create,
        ["menuFinance3"]: result.data.menuFinance?.edit,
        ["menuFinance4"]: result.data.menuFinance?.delete,
        ["menuEmployee1"]: result.data.menuEmployee?.view,
        ["menuEmployee2"]: result.data.menuEmployee?.create,
        ["menuEmployee3"]: result.data.menuEmployee?.edit,
        ["menuEmployee4"]: result.data.menuEmployee?.delete,
        ["menuSystem1"]: result.data.menuSystem?.view,
        ["menuSystem2"]: result.data.menuSystem?.create,
        ["menuSystem3"]: result.data.menuSystem?.edit,
        ["menuSystem4"]: result.data.menuSystem?.delete,
      })

    })
  }, [id])
  console.log(datas);
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขบทบาท</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ไขบทบาท</li>
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
                ชื่อบทบาท
              </Typography>
              <TextField
                value={datas.name ? datas.name : ""}
                onChange={handleChange}
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
                // label="ชื่อบทบาท"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
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
                เมนูการซื้อ
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuBuy1 == 1 ?? true} value={1} name="menuBuy1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuBuy2 == 1 ?? true} value={1} name="menuBuy2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuBuy3 == 1 ?? true} value={1} name="menuBuy3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuBuy4 == 1 ?? true} value={1} name="menuBuy4" onChange={handleChange} />} label="Delete" />
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
                เมนูการขาย
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuSell1 == 1 ?? true} value={1} name="menuSell1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuSell2 == 1 ?? true} value={1} name="menuSell2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuSell3 == 1 ?? true} value={1} name="menuSell3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuSell4 == 1 ?? true} value={1} name="menuSell4" onChange={handleChange} />} label="Delete" />
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
                จัดการสินค้า
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuProduct1 == 1 ?? true} value={1} name="menuProduct1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuProduct2 == 1 ?? true} value={1} name="menuProduct2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuProduct3 == 1 ?? true} value={1} name="menuProduct3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuProduct4 == 1 ?? true} value={1} name="menuProduct4" onChange={handleChange} />} label="Delete" />
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
                จัดการคลังสินค้า
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuWarehouse1 == 1 ?? true} value={1} name="menuWarehouse1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuWarehouse2 == 1 ?? true} value={1} name="menuWarehouse2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuWarehouse3 == 1 ?? true} value={1} name="menuWarehouse3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuWarehouse4 == 1 ?? true} value={1} name="menuWarehouse4" onChange={handleChange} />} label="Delete" />
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
                ลูกค้า
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuCustomer1 == 1 ?? true} value={1} name="menuCustomer1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuCustomer2 == 1 ?? true} value={1} name="menuCustomer2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuCustomer3 == 1 ?? true} value={1} name="menuCustomer3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuCustomer4 == 1 ?? true} value={1} name="menuCustomer4" onChange={handleChange} />} label="Delete" />
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
                เจ้าหนี้
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuCreditor1 == 1 ?? true} value={1} name="menuCreditor1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuCreditor2 == 1 ?? true} value={1} name="menuCreditor2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuCreditor3 == 1 ?? true} value={1} name="menuCreditor3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuCreditor4 == 1 ?? true} value={1} name="menuCreditor4" onChange={handleChange} />} label="Delete" />
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
                การเงิน
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuFinance1 == 1 ?? true} value={1} name="menuFinance1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuFinance2 == 1 ?? true} value={1} name="menuFinance2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuFinance3 == 1 ?? true} value={1} name="menuFinance3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuFinance4 == 1 ?? true} value={1} name="menuFinance4" onChange={handleChange} />} label="Delete" />
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
                ธุรการ
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuEmployee1 == 1 ?? true} value={1} name="menuEmployee1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuEmployee2 == 1 ?? true} value={1} name="menuEmployee2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuEmployee3 == 1 ?? true} value={1} name="menuEmployee3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuEmployee4 == 1 ?? true} value={1} name="menuEmployee4" onChange={handleChange} />} label="Delete" />
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
                จัดการระบบ
              </Typography>
              <FormControlLabel control={<Checkbox checked={datas?.menuSystem1 == 1 ?? true} value={1} name="menuSystem1" onChange={handleChange} />} label="View" />
              <FormControlLabel control={<Checkbox checked={datas?.menuSystem2 == 1 ?? true} value={1} name="menuSystem2" onChange={handleChange} />} label="Create" />
              <FormControlLabel control={<Checkbox checked={datas?.menuSystem3 == 1 ?? true} value={1} name="menuSystem3" onChange={handleChange} />} label="Edit" />
              <FormControlLabel control={<Checkbox checked={datas?.menuSystem4 == 1 ?? true} value={1} name="menuSystem4" onChange={handleChange} />} label="Delete" />
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

export default EditRole;