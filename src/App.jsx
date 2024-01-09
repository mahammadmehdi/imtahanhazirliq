import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
import Detail from "./pages/Detail";
import AddPage from "./pages/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/detail/:id" element={<Detail></Detail>}/>
          <Route path="/add" element={<AddPage></AddPage>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
