import { AccountBalanceWalletOutlined, AssignmentTurnedInOutlined, Home, InsertChartOutlinedOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#202028",
        position: "fixed",
        bottom: 0,
        paddingBottom: "8px",
        borderTop: "1px solid grey"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          marginTop: "15px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div>
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
        <ShoppingBagOutlined style={{ color: "#FFFFF7", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Footer;
