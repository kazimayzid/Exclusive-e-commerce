import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {index: true, Component: Home}
    ]
  }
])

function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
