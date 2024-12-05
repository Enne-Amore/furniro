import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { ShopPage } from "./pages/shopPage/ShopPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { CartPage } from "./pages/cartPage/CartPage";
import { CheckoutPage } from "./pages/checkoutPage/CheckoutPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { SingleProductPage } from "./pages/singleProductPage/SingleProductPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/shop" element={<ShopPage />} />
      
      <Route path="/contact" element={<ContactPage />} />
      
      <Route path="/cart" element={<CartPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/product:id" element={<SingleProductPage />} />
    </Routes>
  );
}
