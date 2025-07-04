import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="automation" element={<h1>s</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
