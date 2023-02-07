import { Route, Routes } from "react-router-dom";
import Products from "../Products";
import Homepage from "../Homepage";
import ProductDetails from "../ProductDetails";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        }
      />
      {/* <Route path="/payment" element={<Payment />} /> */}
    </Routes>
  );
}
