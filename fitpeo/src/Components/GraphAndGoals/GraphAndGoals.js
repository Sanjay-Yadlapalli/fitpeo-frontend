import { Grid } from "@mui/material";
import React from "react";
import ReactEcharts from "echarts-for-react";
import {
  ArrowForwardIos,
  GpsFixedTwoTone,
  LunchDiningTwoTone,
  RestaurantMenuTwoTone,
} from "@mui/icons-material";

const GraphAndGoals = () => {
  return (
    <div style = {{marginBottom: '18px'}}>
      <Grid container display="flex" gap={1} columns={{md: 6.1, xxs: 1}}>
        <Grid
          item
          md={4.12}
          xxs = {1}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            height: "250px",
          }}
        >
          <ReactEcharts
            key={Date.now()}
            theme="light"
            option={{
              color: ["#7394FD"],
              text: "Weekly Visits",
              left: "left",
              top: "10%",
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                },
              },
              grid: {},
              xAxis: [
                {
                  type: "category",
                  data: [
                    "5",
                    "9",
                    "11",
                    "13",
                    "15",
                    "17",
                    "19",
                    "21",
                    "23",
                    "25",
                    "27",
                  ],
                },
              ],
              yAxis: [
                {
                  type: "value",
                  min: 0,
                  max: 15000,
                  interval: 5000,
                  axisLabel: {
                    formatter: (value) => {
                      return value / 1000 + "k";
                    },
                  },
                },
              ],
              series: [
                {
                  type: "bar",
                  barWidth: "50%",
                  itemStyle: {
                    borderRadius: [10, 10, 10, 10], // Rounded corners: top-left, top-right, bottom-right, bottom-left
                  },
                  data: [
                    4000, 9500, 4500, 4200, 6200, 6910, 5100, 8000, 13000, 2700,
                    6000, 7000,
                  ],
                },
              ],
            }}
            style={{ width: "100%", height: "110%" }}
          />
        </Grid>
        <Grid
          item
          md={1.85}
          xss = {1}
          style={{ backgroundColor: "#202028", borderRadius: "3px", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "space-evenly",
              height: "100%",
              padding: "0px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#59343C",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <GpsFixedTwoTone style={{ color: "#F66922" }} />
                </div>
                <p style={{ color: "#FFFFF7" }}>Goals</p>
              </div>
              <div
                style={{
                  backgroundColor: "#46474C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  height: "25px",
                  width: "25px",
                }}
              >
                <ArrowForwardIos
                  style={{ color: "#FFFFF7", fontSize: "12px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#293368",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <LunchDiningTwoTone style={{ color: "#5676CD" }} />
                </div>
                <p style={{ color: "#FFFFF7" }}>Popular Dishes</p>
              </div>
              <div
                style={{
                  backgroundColor: "#46474C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  height: "25px",
                  width: "25px",
                }}
              >
                <ArrowForwardIos
                  style={{ color: "#FFFFF7", fontSize: "12px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#214A60",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <RestaurantMenuTwoTone style={{ color: "#23AAEA" }} />
                </div>
                <p style={{ color: "#FFFFF7" }}>Menus</p>
              </div>
              <div
                style={{
                  backgroundColor: "#46474C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  height: "25px",
                  width: "25px",
                }}
              >
                <ArrowForwardIos
                  style={{ color: "#FFFFF7", fontSize: "12px" }}
                />
              </div>
              
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GraphAndGoals;
