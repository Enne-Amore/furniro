import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { ShopPage } from "./pages/shopPage/ShopPage";
import { ContactPage } from "./pages/contactPage/ContactPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/shop" element={<ShopPage />} />
      
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
