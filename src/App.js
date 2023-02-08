<<<<<<< HEAD
import Navbar from "./Components/Navbar";
import "./App.css";
import AllRoutes from "./Components/Routes/AllRoutes";
import { useState, useEffect } from "react";
import Slider from "./Components/Slider";
=======
import logo from './logo.svg';
import './App.css';
// Commit branch
>>>>>>> 984f4935923a16ffcec300d70ea93a57e6c34878

function App() {
  const [menu, setmenu] = useState(false);
  return (
    <div className="App">
      <Slider setmenu={setmenu} menu={menu} />
      <Navbar setmenu={setmenu} menu={menu} />
      <AllRoutes />
    </div>
  );
}

export default App;
