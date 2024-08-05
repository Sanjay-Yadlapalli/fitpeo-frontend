import { StarBorder } from "@mui/icons-material";
import { Grid, Rating } from "@mui/material";
import React from "react";

const RecentOrders = () => {
  const ordersArr = [
    {
      name: "Wadde Warren",
      orderId: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      name: "Jane Cooper",
      orderId: "14978250",
      amount: "$348.00",
      status: "Delivered",
    },
    {
      name: "Gury Huwkins",
      orderId: "98459374",
      amount: "$583.00",
      status: "Cancelled",
    },
    {
      name: "Kristin Watson",
      orderId: "86920593",
      amount: "$187.00",
      status: "Delivered",
    },
    {
      name: "Cody Fisher",
      orderId: "17409572",
      amount: "$287.00",
      status: "Pending",
    },
    {
      name: "Suvvannah Nguyen",
      orderId: "95726740",
      amount: "$309.00",
      status: "Delivered",
    },
  ];
  
  return (
    <div style={{ marginBottom: "18px" }}>
      <Grid container display="flex" gap={1} columns={{md: 6.1, xxs: 1}}>
        <Grid
          item
          md={4.12}
          xxs = {1}
          style={{
            backgroundColor: "#202028",
            borderRadius: "3px",
            maxHeight: "500px",
            paddingBottom: "20px"
          }}
        >
          <h3
            style={{ color: "#E0E0E2", textAlign: "left", marginLeft: "10px" }}
          >
            Recent Orders
          </h3>
          <div style={{ padding: "10px", maxHeight: "80%", overflowY: "scroll" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    color: "#6F6E73",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      zIndex: "1",
                      padding: "10px",
                      borderBottom: "1px solid grey",
                      position: "sticky",
                      top: "0",
                    }}
                  >
                    Customer
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      zIndex: "1",
                      padding: "10px",
                      borderBottom: "1px solid grey",
                      position: "sticky",
                      top: "0",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Order No.
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      zIndex: "1",
                      padding: "10px",
                      borderBottom: "1px solid grey",
                      position: "sticky",
                      top: "0",
                    }}
                  >
                    Amount
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      zIndex: "1",
                      padding: "10px",
                      borderBottom: "1px solid grey",
                      position: "sticky",
                      top: "0",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {ordersArr?.map((order) => {
                  return (
                    <>
                      <tr
                        style={{
                          color: "#E4E3E8",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        <td
                          style={{
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "0.5px solid grey",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {order.name}
                        </td>
                        <td
                          style={{
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "0.5px solid grey",
                          }}
                        >
                          {order.orderId}
                        </td>
                        <td
                          style={{
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "0.5px solid grey",
                          }}
                        >
                          {order.amount}
                        </td>
                        <td
                          style={{
                            textAlign: "left",
                            borderBottom: "0.5px solid grey",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <p
                              style={{
                                color:
                                  order.status === "Delivered"
                                    ? "#00B17C"
                                    : "#C15555",
                                borderRadius: "8px",
                                backgroundColor:
                                  order.status === "Delivered"
                                    ? "#155145"
                                    : "#5E3136",
                                padding: "2px 8px",
                              }}
                            >
                              {order.status}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Grid>
        <Grid
          item
          md={1.85}
          xss = {1}
          style={{ backgroundColor: "#202028", borderRadius: "3px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "500px",
              padding: "0px 20px",
              width: "90%",
            }}
          >
            <h3
              style={{
                color: "#E0E0E2",
                textAlign: "left",
                marginLeft: "10px",
              }}
            >
              Customer's Feedback
            </h3>
            <div style = {{overflowY: "scroll", height: "100%"}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid grey",
                  width: "100%",
                }}
              >
                <h4
                  style={{
                    color: "#E0E0E2",
                    textAlign: "left",
                    fontSize: "13px",
                  }}
                >
                  Jenny Willson
                </h4>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                  emptyIcon={<StarBorder style={{ color: "white" }} />}
                />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "11px",
                    color: "darkgrey",
                    fontWeight: "400",
                  }}
                >
                  The food was excellent and so was the service. I had the
                  mushroom risotto with scallops which was awesome. I had a
                  burger over greens (gluten-free) which was also really good.
                  They were very concious about gluten allergies
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid grey",
                  width: "100%",
                }}
              >
                <h4
                  style={{
                    color: "#E0E0E2",
                    textAlign: "left",
                    fontSize: "13px",
                  }}
                >
                  Dianne Russell
                </h4>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.8}
                  precision={0.5}
                  readOnly
                  emptyIcon={<StarBorder style={{ color: "white" }} />}
                />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "11px",
                    color: "darkgrey",
                    fontWeight: "400",
                  }}
                >
                  We enjoyed the food alot which is served on homemade and with
                  perfect coffee. Service is really good.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid grey",
                  width: "100%",
                }}
              >
                <h4
                  style={{
                    color: "#E0E0E2",
                    textAlign: "left",
                    fontSize: "13px",
                  }}
                >
                  Dianne Russell
                </h4>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.8}
                  precision={0.5}
                  readOnly
                  emptyIcon={<StarBorder style={{ color: "white" }} />}
                />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "11px",
                    color: "darkgrey",
                    fontWeight: "400",
                  }}
                >
                  We enjoyed the food alot which is served on homemade and with
                  perfect coffee. Service is really good.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid grey",
                  width: "100%",
                  marginBottom: "10px"
                }}
              >
                <h4
                  style={{
                    color: "#E0E0E2",
                    textAlign: "left",
                    fontSize: "13px",
                  }}
                >
                  Dianne Russell
                </h4>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.8}
                  precision={0.5}
                  readOnly
                  emptyIcon={<StarBorder style={{ color: "white" }} />}
                />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "11px",
                    color: "darkgrey",
                    fontWeight: "400",
                  }}
                >
                  We enjoyed the food alot which is served on homemade and with
                  perfect coffee. Service is really good.
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecentOrders;
