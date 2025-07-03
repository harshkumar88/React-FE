import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />} />
    </Routes>
  );
}

export default App;
