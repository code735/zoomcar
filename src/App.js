import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import AllRoutes from "./Components/Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AllRoutes />
    </div>
  );
}

export default App;
