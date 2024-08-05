import {
  DashboardRounded,
  MailOutline,
  NotificationsOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:580px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        height: "10%",
        backgroundColor: "#202028",
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        gap: "18px",
        width: "100%",
      }}
    >
      <div style={{ width: "4%" }}>
        <DashboardRounded style={{ color: "#7191FF", fontSize: "28px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: isSmallScreen ? "120px" :"210px",
            outline: "none",
            borderRadius: "4px",
            backgroundColor: "#2A2B30",
            padding: "3px",
            display: "flex",
            border: "0.1px solid #76757A",
            alignItems: "center",
            marginLeft: isSmallScreen && "10px"
          }}
        >
          <Search style={{ color: "#FFFFF7" }} />
          <input
            style={{
              width: "100%",
              outline: "none",
              border: "0px",
              backgroundColor: "#2A2B30",
              padding: "2.5px",
              color: "#FFFFF7",
            }}
            placeholder="Search..."
          />
        </div>
        {isSmallScreen ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <img
                  style={{
                    height: "35px",
                    borderRadius: "50%",
                    width: "35px",
                    marginRight: "10px",
                  }}
                  src="https://cdn.pixabay.com/photo/2021/02/22/16/34/portrait-6040876_1280.jpg"
                  alt="profile"
                />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <MailOutline fontSize="small" />
                </ListItemIcon>
                Inbox
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <NotificationsOutlined fontSize="small" />
                </ListItemIcon>
                Notifications
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <IconButton style={{ backgroundColor: "#76757A" }}>
                <MailOutline style={{ color: "#FFFFF7", fontSize: "18px" }} />
              </IconButton>
              <IconButton style={{ backgroundColor: "#76757A" }}>
                <SettingsOutlined
                  style={{ color: "#FFFFF7", fontSize: "18px" }}
                />
              </IconButton>
              <IconButton style={{ backgroundColor: "#76757A" }}>
                <NotificationsOutlined
                  style={{ color: "#FFFFF7", fontSize: "18px" }}
                />
              </IconButton>
              <img
                style={{ height: "35px", borderRadius: "50%", width: "35px" }}
                src="https://cdn.pixabay.com/photo/2021/02/22/16/34/portrait-6040876_1280.jpg"
                alt="profile"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
