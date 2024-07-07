import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ServicesDetail from "./components/ServicesDetail/ServicesDetail";
import StoreContextProvider from "./components/context/StoreContext";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services/:id", element: <ServicesDetail /> }, // Updated path with ID parameter
    ],
  },
]);

function App() {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  );
}

export default App;
