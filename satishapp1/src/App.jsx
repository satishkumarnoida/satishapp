import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./Page/Contact";
import Help from "./Page/Help";
import About from "./Page/About";
import Payment from "./Page/Payments";

import ProductListPage from "./components/Productlistpage";
import HomeLayout from "./components/HomeLayout";
import ProductDetailsPage from "./components/productDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/payments" element={<Payment />} />

      <Route path="/" element={<HomeLayout />}>
        
        <Route index element={<ProductListPage />} />

        <Route path="product/:id" element={<ProductDetailsPage />} />

      </Route>
    </Routes>
  );
}

export default App;
