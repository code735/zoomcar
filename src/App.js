import Navbar from "./Components/Navbar";
import "./App.css";
import AllRoutes from "./Components/Routes/AllRoutes";
import Products from "./Components/ProductsPage/Products";
import Slider from "./Components/Slider";
import { useState } from "react";

function App() {
  const [menu, setmenu] = useState(false);
  return (
    <div className="App">
      {/* <Slider setmenu={setmenu} menu={menu} />
      <Navbar setmenu={setmenu} menu={menu} />
      <AllRoutes /> */}
      <Products />
    </div>
  );
}

export default App;
