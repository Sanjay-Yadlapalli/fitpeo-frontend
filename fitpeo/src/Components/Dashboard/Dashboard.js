import { Grid } from "@mui/material";
import React from "react";
import GraphAndGoals from "../GraphAndGoals/GraphAndGoals";
import RecentOrders from "../RecentOrders/RecentOrders";
import {
  ArrowDropDown,
  ArrowDropUp,
  LocalMall,
  Luggage,
  Payments,
} from "@mui/icons-material";
import ReactECharts from "echarts-for-react";

const Dashboard = () => {
  const goalPercentage = 70;
  const option = {
    title: {
      text: `${goalPercentage}%\n Goal Completed`,
      left: "center",
      top: "40%",
      textStyle: {
        fontSize: 8,
        color: "#FEFEFF", // Color for the percentage text
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["50%", "70%"], // Inner and outer radius for the donut effect
        avoidLabelOverlap: false,
        itemStyle: {
          //   borderRadius: 10,
          //   borderColor: "#fff",
          borderWidth: 5,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "10",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: goalPercentage,
            name: "Completed",
            itemStyle: {
              borderRadius: 10,
            },
          },
          {
            value: 100 - goalPercentage,
            name: "Remaining",
            itemStyle: {
              borderRadius: 10,
            },
          }, // Remaining part
        ],
        color: ["#7294FF", "#283466"], // Completed color and remaining color
      },
    ],
    graphic: {
      elements: [
        {
          type: "text",
          left: "center",
          top: "92%",
          style: {
            text: `*The values here are Rounded off`,
            textAlign: "center",
            fill: "grey", // Color for the percentage number
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        {
          type: "text",
          left: "center",
          top: "60%", // Position below the donut
          style: {
            // text: "Goal Completed",
            textAlign: "center",
            fill: "#000", // Color for the label
            fontSize: 5,
          },
        },
      ],
    },
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "0px 15px" }}
    >
      <h3 style={{ color: "#E0E0E2", textAlign: "left" }}>Dashboard</h3>
      <Grid container display="flex" gap={2} marginBottom={2}>
        <Grid
          item
          lg={1.8}
          md = {2.8}
          sm = {3.8}
          xs = {5.75}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            display: "flex",
            flexDirection: "Column",
            padding: "2px 10px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "#2C316B",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          >
            <Luggage style={{ color: "#405BFF" }} />
          </div>
          <p style={{ textAlign: "left", color: "#FFFFF7", fontWeight: "500" }}>
            Total Orders
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2 style={{ color: "#FFFFF7" }}>74</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#00C489",
              }}
            >
              <ArrowDropUp />
              <p style={{ fontWeight: "500" }}>3%</p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={1.8}
          md = {2.8}
          sm = {3.8}
          xs = {5.75}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            display: "flex",
            flexDirection: "Column",
            padding: "2px 10px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "#165246",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          >
            <LocalMall style={{ color: "#00C78C" }} />
          </div>
          <p style={{ textAlign: "left", color: "#FFFFF7", fontWeight: "500" }}>
            Total Delivered
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2 style={{ color: "#FFFFF7" }}>70</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#893C42",
              }}
            >
              <ArrowDropDown />
              <p style={{ fontWeight: "500" }}>3%</p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={1.8}
          md = {2.8}
          sm = {3.8}
          xs = {5.75}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            display: "flex",
            flexDirection: "Column",
            padding: "2px 10px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "#5F3237",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          >
            <LocalMall style={{ color: "#F25E5E" }} />
          </div>
          <p style={{ textAlign: "left", color: "#FFFFF7", fontWeight: "500" }}>
            Total Cancelled
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2 style={{ color: "#FFFFF7" }}>05</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#00C489",
              }}
            >
              <ArrowDropUp />
              <p style={{ fontWeight: "500" }}>3%</p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={1.8}
          md = {2.8}
          sm = {3.8}
          xs = {5.75}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            display: "flex",
            flexDirection: "Column",
            padding: "2px 10px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "#5B2A4A",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          >
            <Payments style={{ color: "#F343A5" }} />
          </div>
          <p style={{ textAlign: "left", color: "#FFFFF7", fontWeight: "500" }}>
            Total Revenue
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2 style={{ color: "#FFFFF7" }}>$12k</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#893C42",
              }}
            >
              <ArrowDropDown />
              <p style={{ fontWeight: "500" }}>3%</p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={4}
          md = {5.85}
          sm = {7.85}
          xs = {11.9}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            display: "flex",
          }}
        >
          <Grid container width="100%">
            <Grid item lg={6} md = {6} sm = {6} xs = {6}>
              <div style={{}}>
                <p
                  style={{
                    textAlign: "left",
                    color: "#FFFFF7",
                    fontWeight: "500",
                    marginLeft: "5px"
                  }}
                >
                  Net Profit
                </p>
                <h2 style={{ color: "#FFFFF7", textAlign: "left", marginLeft: "5px" }}>
                  $6759.25
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#00C489",
                  }}
                >
                  <ArrowDropUp />
                  <p style={{ fontWeight: "500" }}>3%</p>
                </div>
              </div>
            </Grid>
            <Grid
              lg={4.8}
              md = {6}
              sm = {6}
              xs = {6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ReactECharts
                option={option}
                style={{ width: "100%", height: "150px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <GraphAndGoals />
      <RecentOrders />
    </div>
  );
};

export default Dashboard;
