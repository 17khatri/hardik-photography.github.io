import {
  Tabs,
  AppBar,
  Tab,
  Typography,
  Drawer,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import * as React from "react";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabMapping = ["/", "/about", "/contact"];
  const currentTab = tabMapping.indexOf(location.pathname);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(240, 229, 229, 0.4)",
      }}
    >
      <Typography
        sx={{
          color: "black",
          fontFamily: "cursive",
          fontSize: "24px",
          marginLeft: "12px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Hardik Photography
      </Typography>
      <Tabs
        value={currentTab}
        onChange={(e, newValue) => navigate(tabMapping[newValue])}
        textColor="inherit"
        indicatorColor="secondry"
        sx={{
          fontWeight: "700",
          color: "black",
          "& .MuiTabs-flexContainer": {},
          "& .MuiTab-root": {
            fontWeight: "bold",
          },
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
          },
        }}
      >
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
          color: "black",
          marginRight: "12px",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: {
              xs: "300px",
              sm: "350px",
              display: "flex",
              justifyContent: "end",
              marginTop: "10px",
            },
          }}
        >
          <CloseIcon
            sx={{ cursor: "pointer", margin: "5px", fontSize: "30px" }}
            onClick={toggleDrawer(false)}
          />
        </Box>
        <Box sx={{ padding: "15px", color: "gray" }}>
          <Divider />
          <Typography
            sx={{
              display: "flex",
              fontWeight: "700",
              margin: "10px 0",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
              toggleDrawer(false)();
              
            }}
          >
            <HomeIcon sx={{ marginRight: "15px" }} /> Home
          </Typography>
          <Divider />
          <Typography
            sx={{
              display: "flex",
              fontWeight: "700",
              margin: "10px 0",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/contact");
              toggleDrawer(false)();
            }}
          >
            <CallIcon sx={{ marginRight: "15px" }} /> Contact Us
          </Typography>
          <Divider />
          <Typography
            sx={{
              display: "flex",
              fontWeight: "700",
              margin: "10px 0",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/about");
              toggleDrawer(false)();
            }}
          >
            <InfoIcon sx={{ marginRight: "15px" }} /> About Us
          </Typography>
          <Divider />
        </Box>
      </Drawer>
    </AppBar>
  );
}
