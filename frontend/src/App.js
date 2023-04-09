import "./App.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#fadde1",
      }}
    >
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
