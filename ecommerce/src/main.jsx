import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./assets/css/style.css";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Compare from "./pages/Compare/Compare";
import Wishlist from "./pages/wishlist/Wishlist";
import FlashSell from "./pages/flashSell/FlashSell";
import ProductDetails from "./pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product", element: <Product /> },
      { path: "/product-details", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/compare", element: <Compare /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/flashsell", element: <FlashSell /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
