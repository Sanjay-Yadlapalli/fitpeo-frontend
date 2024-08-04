import {
  AccountBalanceWalletOutlined,
  AssignmentTurnedInOutlined,
  Home,
  InsertChartOutlinedOutlined,
  LogoutOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", width: "101.6%", height: "90%" }}>
      <div
        style={{
          height: "100%",
          backgroundColor: "#202028",
          width: "4%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
            marginTop: "15px",
            width: "100%",
          }}
        >
          <div style={{ borderLeft: "2px solid #7191FF", width: "95%" }}>
            <Home style={{ color: "#7191FF", cursor: "pointer" }} />
          </div>
          <InsertChartOutlinedOutlined
            style={{ color: "#FFFFF7", cursor: "pointer" }}
          />
          <AssignmentTurnedInOutlined
            style={{ color: "#FFFFF7", cursor: "pointer" }}
          />
          <AccountBalanceWalletOutlined
            style={{ color: "#FFFFF7", cursor: "pointer" }}
          />
          <ShoppingBagOutlined
            style={{ color: "#FFFFF7", cursor: "pointer" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <LogoutOutlined style={{ color: "#FFFFF7", cursor: "pointer" }} />
        </div>
      </div>
      <div style={{ width: "110%", backgroundColor: "#141416", height: "100%", overflowY: "scroll" }}>
        <Dashboard />
      </div>
    </div>
  );
};

export default Sidebar;
