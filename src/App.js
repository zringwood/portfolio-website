import Header from "./components/Header/Header";
import Biography from "./pages/Biography";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route to="/" element={<Biography />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
