import Biography from "./pages/Biography/Biography";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Tactics from "./pages/Tactics/Tactics";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
function App() {
  return (
    <BrowserRouter>
    <NavigationMenu />
    <Routes>
      <Route path="/" element={<Biography />}/>
      <Route path="/tactics" element={<Tactics projectURL={"https://tactics.zacharyringwood.com"}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
