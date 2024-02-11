import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout.js";
import Home from "./views/Home.js";
import Models from "./views/Models/ModelsList.js";
import Vehicles from "./views/Vehicles.js";
import Error404 from "./views/Error404.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="models" element={<Models />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
