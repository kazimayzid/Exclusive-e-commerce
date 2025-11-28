import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";

import RootLayout from "../src/layout/RootLayout"
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {index: true, Component: Home},
      {path: "product", Component: Product},
      {path: "/productdetails/:id", Component: ProductDetails},
      {path: "/cartpage", Component: CartPage},
    ]
  }
])

function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
