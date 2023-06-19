import * as React from "react";
import { Box } from "@mui/material";
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

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dynamic from 'next/dynamic'
import axios from "axios";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const EditEmployee = () => {
  const checkemail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const checkphone = /^0\d{8,9}\s*$/
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  const [date, setDate] = React.useState('');
  const [datas, setDatas] = React.useState('');
  const { id } = router.query

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("datestart", date)
    console.log({
      name: data.get("name"),
      surname: data.get("surname"),
      phoneNumber: data.get("phoneNumber"),
      address: data.get("address"),
      email: data.get("email"),
      photo: data.get("photo"),
      datestart: data.get("datestart"),
    });

    axios.put(`${process.env.NEXT_PUBLIC_API}/admin/update_Employee?id=` + id, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())
  };

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/admin/get_Employee?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {setDatas(result.data),setDate(result.data?.datestart)})

  }, [id])
console.log(datas)

  const handleChange = (event) => {
    if (event.target.name == "productImage") {
      setDatas({ ...datas, [event.target.name]: event.target.files[0].name });
    } else {
      setDatas({ ...datas, [event.target.name]: event.target.value });
    }
    

  };
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขพนักงาน</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ไขพนักงาน</li>
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
                ชื่อ
              </Typography>
              <TextField
                onChange={handleChange}
                value={datas?.name ? datas?.name : ""}
                autoComplete="product-name"
                name="name"
                required
                fullWidth
                id="name"
                // label="ชื่อ"
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
                นามสกุล
              </Typography>
              <TextField
                onChange={handleChange}
                value={datas.surname ? datas.surname : ""}
                autoComplete="product-name"
                name="surname"
                required
                fullWidth
                id="surname"
                // label="นามสกุล"
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
                value={datas.phoneNumber ? datas.phoneNumber : ""}
                onChange={handleChange}
                autoComplete="short-description"
                name="phoneNumber"
                required
                fullWidth
                id="Short Description"
                // label="phoneNumber"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                error={!checkphone.test(datas.phoneNumber)}
                helperText={!checkphone.test(datas.phoneNumber) ? "เบอร์โทรศัพท์ไม่ถูกต้อง" :""}
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
                ที่อยู่
              </Typography>
              <TextField
                value={datas.address ? datas.address : ""}
                onChange={handleChange}
                autoComplete="short-description"
                name="address"
                required
                fullWidth
                id="Short Description"
                label="address"
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
                value={datas.email ? datas.email : ""}

                onChange={handleChange}
                autoComplete="short-description"
                name="email"
                required
                fullWidth
                id="Short Description"
                label="email"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}

                error={!checkemail.test(datas.email)}
                helperText={!checkemail.test(datas.email) ? "อีเมล์ไม่ถูกต้อง" :""}
              />

            </Grid>
            <Grid item xs={6}>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography
                  as="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  เริ่มงานวันที่
                </Typography>
                <DatePicker name={"datestart"} value={datas.datestart} InputProps={{ style: { borderRadius: 8 } }} renderInput={(props) => <TextField {...props} />} onChange={(e) => setDatas({ ...datas, ["datestart"]: e.$d }, setDate(e.$d))} />

              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                รูปพนักงาน
              </Typography>
              <TextField
                // onChange={handleChange}
                autoComplete="product-image"
                name="photo"
                required
                fullWidth
                id="photo"
                type="file"
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
                disabled={!checkemail.test(datas.email)|| !checkphone.test(datas.phoneNumber)}
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

export default EditEmployee;