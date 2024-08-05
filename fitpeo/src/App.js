import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // Extra small devices (phones)
      xs: 320,
      sm: 600, // Small devices (tablets)
      md: 900, // Medium devices (desktops)
      lg: 1200, // Large devices (large desktops)
      xl: 1536, // Extra large devices (very large desktops)
      xxl: 1800, // Custom breakpoint for larger screens
    },
  },
});
function App() {
  const isSmallScreen = useMediaQuery("(max-width:580px)");
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ height: "100vh", width: "98.45vw" }}>
        <Navbar />
        <div style={{ display: "flex", width: "101.6%", height: "90%" }}>
          {!isSmallScreen && <Sidebar />}
          <div
            style={{
              width: "110%",
              backgroundColor: "#141416",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <Dashboard />
            {isSmallScreen && <Footer />}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
