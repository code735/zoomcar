
// import Navbar from "./Components/Navbar";
import "./App.css";
// import AllRoutes from "./Components/Routes/AllRoutes";
// import { useState, useEffect } from "react";
// import Slider from "./Components/Slider";
import Payment from "./Components/Payment";


function App() {
  // const [menu, setmenu] = useState(false);
  return (
    <div className="App">
      {/* <Slider setmenu={setmenu} menu={menu} />
      <Navbar setmenu={setmenu} menu={menu} /> */}
      <Payment/>
      {/* <AllRoutes /> */}
      
    </div>
  );
}

export default App;
