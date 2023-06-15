import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Modal } from '@mui/material';

export default function ChangePassword() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState("")
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // console.log(data)
  const handleSubmit = (event) => {
   
    event.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_API}/auth/changepassword`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(()=>setOpen(true)).catch((err)=> alert(err.response.data))
   
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            borderBottom: '1px solid #eee',
            paddingBottom: '10px'
          }}
          className="for-dark-bottom-border"
        >
          {/* <Typography component="h1" fontWeight="500" fontSize="18px">
            Security
          </Typography> */}

          {/* <Typography fontSize="13px">
            Update your password here.
          </Typography> */}
        </Box>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                Old Password
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="old-password*"
                name="oldPassword"
                fullWidth
                id="oldPassword"
                type="password"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                New Password
              </Typography>
              <TextField
              required
                onChange={handleChange}
                autoComplete="new-password"
                name="newPassword"
                fullWidth
                id="newPassword"
                type="password"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                onChange={handleChange}
                autoComplete="confirm-password"
                name="confirmPassword"
                fullWidth
                id="confirmPassword"
                type="password"
                autoFocus
              />
            </Grid>

            {/* <Grid item xs={12}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                Email Address
              </Typography>

              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </Grid> */}
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "14px",
              padding: "12px 30px",
              color: "#fff !important"
            }}
          >
            Change Password
          </Button>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          อัพเดทข้อมูลเรียบร้อย
          </Typography>
          
        </Box>
      </Modal>
    </>
  );
}