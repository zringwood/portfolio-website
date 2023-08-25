import Header from "./components/Header/Header";
import Biography from "./pages/Biography/Biography";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Tactics from "./pages/Tactics/Tactics";
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Biography />}/>
      <Route path="/tactics" element={<Tactics projectURL={"https://tactics.zacharyringwood.com"}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
