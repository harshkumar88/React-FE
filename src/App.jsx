import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./routes/PrivateRoutes";
import Automation from "./pages/automation";
import "./styles.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/automation" element={<Automation />} />
      </Route>
    </Routes>
  );
}

export default App;
