import {
  AccountBalanceWalletOutlined,
  AssignmentTurnedInOutlined,
  Home,
  InsertChartOutlinedOutlined,
  LogoutOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (<div
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
    
  );
};

export default Sidebar;
