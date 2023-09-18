import Biography from "./pages/Biography/Biography";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Tactics from "./pages/Tactics/Tactics";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import { ThemeProvider, createTheme } from "@mui/material";
function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <NavigationMenu sx={{
      zIndex: 20,
     position: "fixed",
         right: "5%",
         top: "5%",}}/>
    <Routes>
      <Route path="/" element={<Biography />}/>
      <Route path="/tactics" element={<Tactics projectURL={"https://tactics.zacharyringwood.com"}/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
