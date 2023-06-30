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
const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

const CreateEmployee = () => {
  const router = useRouter()
  const { username } = router.query

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.NEXT_PUBLIC_API}/auth/update_role_by_username`,{username,roleSelect}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(()=> router.back())
   
  };



  
  // Select dropdown
  const [roleSelect, setRoleSelect] = React.useState('');
  const [datas, setDatas] = React.useState('');
  const [roles, setRoles] = React.useState([]);
  const handleChange = (event) => {
    // setRoleSelect({...roleSelect,[event.target.name]:event.target.value});
    setRoleSelect(event.target.value);
  };

  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/auth/getoneuser/` + username, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {setDatas(result.data)
      // ,setRoleSelect(result.data)
    })
  }, [username])
  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/role/get_all_role`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setRoles(result.data) )
  }, [])

  const handleClose = ()=>{
    router.back()
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>แก้ไขผู้ใช้งาน</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>แก้ไขผู้ใช้งาน</li>
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
                Username: {datas.username}
              </Typography>
              {/* <TextField
                autoComplete="product-name"
                name="productName"
                required
                fullWidth
                id="productName"
                label="Name"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              /> */}
            </Grid>


            {/* <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Email: {datas.email}
              </Typography>
              <TextField
                autoComplete="short-description"
                name="Email"
                required
                fullWidth
                id="Short Description"
                label="Email"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid> */}

            <Grid item xs={12} md={12} lg={1}>

              <Typography
                as="h3"
                sx={{
                  fontSize: 18,
                  fontWeight: 500,
                  mb: '10px'
                }}
              >
                Role
              </Typography>

              <Box sx={{ minWidth: 120 }}>

                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Role</InputLabel> */}

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={roleSelect}
                    // defaultValue={roleSelect}
                    onChange={handleChange}
                    name="role"
                  >
                    {roles.map(result => (

                      <MenuItem key={result.id} value={result.id}>{result.name}</MenuItem>
                    ))}
                    {/* <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem> */}
                  </Select>
                </FormControl>
              </Box>
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
                  color: "#fff !important",
                  marginRight: "10px"

                }}
              >

                บันทึก
              </Button>
              <Button
                variant="contained"
                color="danger"
                onClick={handleClose}

                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important"
                }}
              >

                ยกเลิก
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreateEmployee;