import {
  DashboardRounded,
  MailOutline,
  NotificationsOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Navbar = () => {
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
      <div style = {{width: "4%"}}>
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
            width: "210px",
            outline: "none",
            borderRadius: "4px",
            backgroundColor: "#2A2B30",
            padding: "3px",
            display: "flex",
            border: "0.1px solid #76757A",
            alignItems: "center",
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
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <IconButton style={{ backgroundColor: "#76757A" }}>
            <MailOutline style={{ color: "#FFFFF7", fontSize: "18px" }} />
          </IconButton>
          <IconButton style={{ backgroundColor: "#76757A" }}>
            <SettingsOutlined style={{ color: "#FFFFF7", fontSize: "18px" }} />
          </IconButton>
          <IconButton style={{ backgroundColor: "#76757A" }}>
            <NotificationsOutlined
              style={{ color: "#FFFFF7", fontSize: "18px" }}
            />
          </IconButton>
          {/* <IconButton> */}
          <img
            style={{ height: "35px", borderRadius: "50%", width: "35px" }}
            src="https://cdn.pixabay.com/photo/2021/02/22/16/34/portrait-6040876_1280.jpg"
            alt="profile"
          />
          {/* </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
