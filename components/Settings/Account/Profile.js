import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Modal } from '@mui/material';

export default function Profile(props) {

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

  const { user, setUser } = props
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();

    axios.put(`${process.env.NEXT_PUBLIC_API}/auth/update_user`, user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(()=>setOpen(true))


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
          <Typography component="h1" fontWeight="500" fontSize="18px">
            โปรไฟล์
          </Typography>

          {/* <Typography fontSize="13px">
            Update your photo and personal details here.
          </Typography> */}
        </Box>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                ชื่อ
              </Typography>
              <TextField
                onChange={handleChange}
                value={user.name ? user.name : ""}
                autoComplete="given-name"
                name="name"
                fullWidth
                id="name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                นามสกุล
              </Typography>

              <TextField
                onChange={handleChange}

                value={user.lastname ? user.lastname : ""}

                fullWidth
                id="lastname"
                name="lastname"
                autoComplete="family-name"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
              >
                ที่อยุ่
              </Typography>

              <TextField
                onChange={handleChange}

                value={user.address ? user.address : ""}

                fullWidth
                id="address"
                name="address"
                autoComplete="address"
              />
            </Grid>

            
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
            บันทึก
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