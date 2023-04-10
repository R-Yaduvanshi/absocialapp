import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
