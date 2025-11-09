import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Register from "./components/Register/Register.jsx";
import MyProducts from "./MyProducts/MyProducts.jsx";
import MyBids from "./MyBids/MyBids.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "Register",
        Component: Register,
      },
      {
        path: "myProducts",
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      },
      {
        path: "MyBids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: 'productDetails/:id',
        loader:({params}) => fetch (`http://localhost:3000/products/${params.id}`),
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
        // component: ProductDetails
      }
      // {
      //   path: "productDetails/:id",
      //   loader: async ({ params }) => {
      //     const res = await fetch(
      //       `http://localhost:3000/products/${params.id}`
      //     );
      //     if (!res.ok) return params.id;
      //     return res.json();
      //   },
      //   element: <ProductDetails />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
