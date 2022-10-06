import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const currentUser = true;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 156, height: 156 }}
        />
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
          Login
        </Typography>

        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                name="email"
                variant="outlined"
                type="email"
                value={email ?? ""}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="password"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" fullWidth>
                CONTINUE WITH GOOGLE
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
