import Biography from "./pages/Biography/Biography";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tactics from "./pages/Tactics/Tactics";
import Portfolio from "./pages/Portfolio/Portfolio";
import Energy from "./pages/Energy/Energy";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark")
  console.log("Reached")
  const theme = createTheme({
    palette: {
      mode: mode
    },
    components: {
      MuiAccordion: {
        border: "none",
        boxShadow: "none",
        outline: "none",
      }
    },

  })
  theme.palette.background.lighter = newShade(theme.palette.background.default, 10)
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <BrowserRouter>
          <NavigationMenu setMode={setMode} sx={{
            zIndex: 200000,
            position: "fixed",
            right: "5%",
            top: "5%",
          }} />
          <Routes>
            <Route path="/" element={<Biography />} />
            <Route path="/tactics" element={<Tactics projectURL={"https://tactics.zacharyringwood.com"} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/energy" element={<Energy />} />

          </Routes>
          <Footer />
        </BrowserRouter>

      </LocalizationProvider>
    </ThemeProvider>

  );
}

export default App;

function newShade(hexColor, magnitude) {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};
