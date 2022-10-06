import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const MyNavbar = () => {
  const currentUser = true;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/");
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Redux News
          </Typography>

          {currentUser ? (
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography
                  sx={{
                    marginRight: "1rem",
                  }}
                >
                  {currentUser?.displayName}
                </Typography>
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>News</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              onClick={handleRegister}
              color="inherit"
            >
              <Typography
                sx={{
                  marginRight: "0.5rem",
                }}
              >
                Register
              </Typography>
              <LockOpenIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MyNavbar;
