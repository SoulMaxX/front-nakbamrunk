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

import dynamic from 'next/dynamic'
import axios from "axios";
import { useRouter } from "next/router";

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CreateBookBank = () => {
  const [role, setRole] = React.useState([]);
  const [datas, setDatas] = React.useState("");
  const [type, setType] = React.useState("");
  const router = useRouter()
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(`${process.env.NEXT_PUBLIC_API}/finance/create_bank`, datas, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.back())
    // console.log({
    //   nameBank: data.get("nameBank"),
    //   type: data.get("type"),
    // });
  };

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/role/get_role`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setRole(result.data))

  }, [])
  if (role.menuFinance?.create == 0) {
    router.back()
  }
  // Select dropdown
  const handleChange = (event) => {
    setDatas({ ...datas, [event.target.name]: event.target.value });
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>เพิ่มบัญชีธนาคาร</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>เพิ่มบัญชีธนาคาร</li>
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
            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อบัญชี
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-name"
                name="nameAccount"
                required
                fullWidth
                id="nameAccount"
                label="ชื่อบัญชี"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                ชื่อธนาคาร
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-name"
                name="nameBank"
                required
                fullWidth
                id="nameBank"
                label="ชื่อธนาคาร"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                สาขา
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="product-name"
                name="branchBank"
                required
                fullWidth
                id="branchBank"
                label="สาขา"
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
                ประเภทบัญชี
              </Typography>

              <Select
                name="type"
                labelId="demo-simple-select-label"
                id="type"
                value={datas?.type ?? ""}
                onChange={handleChange}
              >
                <MenuItem value={"ออมทรัพย์"}>ออมทรัพย์</MenuItem>
                <MenuItem value={"กระแสรายวัน"}>กระแสรายวัน</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} md={12} lg={5}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                เลขบัญชีธนาคาร
              </Typography>
              <TextField
                inputProps={{ maxLength: 10 }}
                onChange={handleChange}
                autoComplete="short-description"
                name="accountNumber"
                required
                fullWidth
                id="accountNumber"
                label="เลขบัญชีธนาคาร"
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
                เพิ่มบัญชีธนาคาร
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateBookBank;