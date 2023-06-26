import * as React from "react";
import { Box, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize } from "@mui/material";
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

const CreateCustomer = () => {
  const router = useRouter()
  const { id } = router.query
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  const [emp, setEmp] = React.useState([]);
  const [pay, setPay] = React.useState(0);
  const [datas, setDatas] = React.useState('');

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/admin/get_allEmployee`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setEmp(result.data))

  }, [])
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/customer/get_customer?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setDatas(result.data), setPay(result?.data?.payinmounth) })

  }, [id])

  // console.log(emp)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // data.append("payinmounth", pay)

    console.log({
      payinmounth: data.get("payinmounth"),
      sale: data.get("sale"),
      Email: data.get("email"),
    });

    console.log(data)
    axios.put(`${process.env.NEXT_PUBLIC_API}/customer/update_customer?id=` + id, datas, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())

  };

  // Select dropdown
  const [empSelect, setEmpSelect] = React.useState('');
  const handleChangeEmp = (event) => {
    setEmpSelect(event.target.value);
  };

  const handleChangePay = (event) => {
    if (event.target.name == "payinmounth" && event.target.checked == true) {
      setDatas({ ...datas, ["payinmounth" ]: 1 })
      setPay(1);
    } else {
      setDatas({ ...datas, ["payinmounth" ]: 0 })
      setPay(0);
    }
  };

  const handleChange = (event) => {
    // if (event.target.name == "payinmounth" && event.target.checked == false) {
    //   setDatas({ ...datas, ["payinmounth"]: true })

      // }else if(event.target.name == "payinmounth" && event.target.value == 1) {
      //   setDatas({ ...datas, ["payinmounth"]: true})

      setDatas({ ...datas, [event.target.name]: event.target.value })
    console.log("check" + event.target.checked)
  };
  console.log(empSelect)
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขข้อมูลลูกค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ไขข้อมูลลูกค้า</li>
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
                รหัสลูกค้า
              </Typography>
              <TextField
                value={datas.id ?? ""}
                onChange={handleChange}
                autoComplete="product-name"
                name="id"
                required
                fullWidth
                id="id"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อ
              </Typography>
              <TextField
                value={datas.name ?? ""}
                onChange={handleChange}
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ที่อยุ่
              </Typography>
              <TextField
                value={datas.address ?? ""}
                onChange={handleChange}

                autoComplete="product-name"
                name="address"
                required
                fullWidth
                id="address"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เลขประจำตัวผู้เสียภาษี
              </Typography>
              <TextField
                value={datas.taxnumber ?? ""}
                onChange={handleChange}

                autoComplete="product-name"
                name="taxnumber"
                required
                fullWidth
                id="taxnumber"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
            </Grid>


            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ผู้ติดต่อ
              </Typography>
              <TextField
                value={datas.contact ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="contact"
                required
                fullWidth
                id="contact"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Email
              </Typography>
              <TextField
                value={datas.email ?? ""}
                onChange={handleChange}
                autoComplete="short-description"
                name="email"
                required
                fullWidth
                id="email"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เบอร์โทรศัพท์
              </Typography>
              <TextField
                value={datas.tel ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="tel"
                required
                fullWidth
                id="tel"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เบอร์แฟกซ์
              </Typography>
              <TextField
                value={datas.faxnumber ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="faxnumber"
                required
                fullWidth
                id="faxnumber"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                {/* ที่อยู่ */}
              </Typography>
              <InputLabel id="demo-simple-select-label">Sales</InputLabel>
              <Select
                // labelId="demo-simple-select-label"
                sx={{ width: "200px" }}
                id="sale"
                name="sale"
                onChange={handleChange}
                value={datas.sale?? ""}
              >
                {emp.map((e) =>
                  // console.log(e)
                  <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                )}
              </Select>

            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                วงเงิน
              </Typography>
              <TextField
                value={datas.limit ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="limit"
                required
                fullWidth
                id="limit"
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
                เครดิตวัน
              </Typography>
              <TextField
                value={datas.creditday ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="creditday"
                required
                fullWidth
                id="creditday"
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
                เครติดเดือน
              </Typography>
              <TextField
                value={datas.creditmount ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="creditmount"
                required
                fullWidth
                id="creditmount"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel style={{ marginTop: "30px" }} control={<Checkbox checked={pay == 1 ?? true} value={1} name="payinmounth" onChange={handleChangePay} />} label="ชำระสิ้นเดือน" />
            </Grid>
            <Grid item xs={12} md={12} lg={6}></Grid>

            <Grid item xs={12} md={12} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ตัดวันที่
              </Typography>
              <TextField
                value={(datas.datecut)?.slice(0, 10) ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="datecut"
                required
                fullWidth
                id="datecut"
                type="date"
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
                บวกเพิ่ม %
              </Typography>
              <TextField
                value={datas.interest ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="interest"
                required
                fullWidth
                id="interest"
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
                วันที่เริ่ม
              </Typography>
              <TextField
                value={(datas.datestart)?.slice(0, 10) ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="datestart"
                required
                fullWidth
                id="datestart"
                type="date"

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
                วันที่สิ้นสุด
              </Typography>
              <TextField
                value={(datas.dateend)?.slice(0, 10) ?? ""}
                onChange={handleChange}

                autoComplete="short-description"
                name="dateend"
                required
                fullWidth
                id="dateend"
                type="date"

                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}></Grid>




            <Grid item xs={12} md={12} lg={10}>
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
              <TextareaAutosize
                value={datas.note ?? ""}
                onChange={handleChange}

                name="note"
                aria-label="minimum height"
                minRows={3}
                style={{
                  width: "100%",
                  background: '#FFFFFF',
                  border: '1px solid #B1B5C3',
                  borderRadius: '10px',
                  padding: '15px'
                }}
                className="dark-textarea"
              />
            </Grid>

            {/* <Grid item xs={12} md={12} lg={2}>
              <FormControlLabel style={{ marginTop: "30px" }} control={<Checkbox defaultChecked />} label="ยกเลิกบัญชี" />
            </Grid> */}

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
                แก้ไขข้อมูลลูกค้า
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateCustomer;