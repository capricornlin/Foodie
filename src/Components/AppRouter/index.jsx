import { Routes, Navigate, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Checkout from "../../Pages/Checkout";
import Japan from "../../Pages/Japan";
import Europe from "../../Pages/Europe";
import Taiwan from "../../Pages/Taiwan";
import America from "../../Pages/America";
import Myselect from "../../Pages/Myselect";
import Resturant from "../../Pages/Resturant";
import NotFound from "../NotFound";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Japan" element={<Japan />} />
        <Route path="/Europe" element={<Europe />} />
        <Route path="/Taiwan" element={<Taiwan />} />
        <Route path="/America" element={<America />} />
        <Route path="/Myselect" element={<Myselect />} />
        <Route path="/America/1" element={<Resturant resturantName="美式1" />} />
        <Route path="/America/5" element={<Resturant resturantName="美式5" />} />
        <Route path="/Taiwan/4" element={<Resturant resturantName="台式4" />} />
        <Route path="/Taiwan/8" element={<Resturant resturantName="台式8" />} />
        <Route path="/Taiwan/9" element={<Resturant resturantName="台式9" />} />
        <Route path="/Europe/3" element={<Resturant resturantName="歐式3" />} />
        <Route path="/Europe/6" element={<Resturant resturantName="歐式6" />} />
        <Route path="/Europe/10" element={<Resturant resturantName="歐式10" />} />
        <Route path="/Japan/2" element={<Resturant resturantName="日式2" />} />
        <Route path="/Japan/7" element={<Resturant resturantName="日式7" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
