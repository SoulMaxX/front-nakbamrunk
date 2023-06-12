import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "@/components/Authentication/Authentication.module.css";
import axios from 'axios';


const SignUpForm = () => {
  const [datas, setDatas] = React.useState("");
  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value })
  }
  // console.log(datas)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!datas.password || !datas.confirmpassword) {
      alert("กรุณากรอกรหัสผ่าน")
    }
    if (datas.password !== datas.confirmpassword) {
      alert("รหัสผ่านไม่เหมือนกัน")
    } else {
      axios.post(`${process.env.NEXT_PUBLIC_API}/auth/register`, datas)
        .then(result => {
          // console.log(result)
          window.location.href = `${process.env.NEXT_PUBLIC_IP}/authentication/sign-in/`
        }
        )
        .catch(e => { if (e.response.status == 400) { alert(e.response.data.error) } }
        )
    }

  };

  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            maxWidth: "510px",
            ml: "auto",
            mr: "auto",
            padding: "50px 0 100px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography as="h1" fontSize="28px" fontWeight="700" mb="5px">
                สมัครสมาชิก{" "}
                {/* <img
                  src="/images/favicon.png"
                  alt="favicon"
                  className={styles.favicon}
                /> */}
              </Typography>

              {/* <Typography fontSize="15px" mb="30px">
                Already have an account?{" "}
                <Link
                  href="/authentication/sign-in/"
                  className="primaryColor text-decoration-none"
                >
                  Sign in
                </Link>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "30px",
                }}
              >
                <Link href="#" className={styles.googleBtn}>
                  <img src="/images/google-icon.png" /> Sign in with Google
                </Link>

                <Link href="#" className={styles.fbBtn}>
                  <img src="/images/fb-icon.png" /> Sign in with Facebook
                </Link>
              </Box>

              <div className={styles.or}>
                <span>or</span>
              </div> */}

              <Box component="form" noValidate onSubmit={handleSubmit}>
                <Box
                  sx={{
                    background: "#fff",
                    padding: "30px 20px",
                    borderRadius: "10px",
                    mb: "20px",
                  }}
                  className="bg-black"
                >
                  <Grid container alignItems="center" spacing={2}>


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
                        Email
                      </Typography>

                      <TextField
                        onChange={handleChange}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
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
                        Password
                      </Typography>

                      <TextField
                        onChange={handleChange}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
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
                        Confirm Password
                      </Typography>

                      <TextField
                        onChange={handleChange}
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        // autoComplete="new-password"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
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
                        ชื่อ
                      </Typography>

                      <TextField
                        onChange={handleChange}
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="ชื่อ"
                        autoFocus
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
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
                        นามสกุล
                      </Typography>

                      <TextField
                        onChange={handleChange}
                        required
                        fullWidth
                        id="lastname"
                        label="นามสกุล"
                        name="lastname"
                        autoComplete="family-name"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
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
                        required
                        fullWidth
                        id="address"
                        label="ที่อยุ่"
                        name="address"
                        autoComplete="family-name"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={6} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Remember me."
                    />
                  </Grid>

                  <Grid item xs={6} sm={6} textAlign="end">
                    <Link
                      href="/authentication/forgot-password"
                      className="primaryColor text-decoration-none"
                    >
                      Forgot your password?
                    </Link>
                  </Grid>
                </Grid> */}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "16px",
                    padding: "12px 10px",
                    color: "#fff !important",
                  }}
                >
                  สมัครสมาชิก
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default SignUpForm;
