import { Route, Routes } from "react-router-dom";
import Products from "../ProductsPage/Products";
import Homepage from "../Homepage";
import ProductDetails from "../ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Payment";
import PaymentSuccess from "../paymentDonePage";

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
      <Route path="/payment" element={<Payment />} />
      <Route path='/paymentDone' element={<PaymentSuccess/>}/>
    </Routes>
  );
}
