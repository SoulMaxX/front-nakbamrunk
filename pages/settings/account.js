import * as React from 'react';
import Profile from "@/components/Settings/Account/Profile";
import NavBar from "@/components/Settings/NavBar";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import axios from 'axios';

export default function Account() {
  const [user, setUser] = React.useState("")
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/auth/getuser`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setUser(result.data))
  }, [])

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
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",
            mb: "15px",
          }}
          className="for-dark-bottom-border"
        >
          ตั้งค่า
        </Typography>

        {/* NavBar */}
        <NavBar />

        {/* Profile */}
        <Profile user={user} setUser={setUser} />
      </Card>
    </>
  );
}
