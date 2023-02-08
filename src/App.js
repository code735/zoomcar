import Navbar from "./Components/Navbar";
import "./App.css";
import AllRoutes from "./Components/Routes/AllRoutes";
import Products from "./Components/Products";

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
