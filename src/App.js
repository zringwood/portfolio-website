import Header from "./components/Header/Header";
import Biography from "./pages/Biography/Biography";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Biography />}/>
      <Route path="/" element={<p>None</p>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
