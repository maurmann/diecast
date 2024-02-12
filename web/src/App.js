import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout.js";
import Home from "./views/Home.js";
import ModelsList from "./views/Models/ModelsList.js";
import ModelsForm from "./views/Models/ModelsForm.js";
import Vehicles from "./views/Vehicles.js";
import Error404 from "./views/Error404.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="models" element={<ModelsList />} />
          <Route path="models/form" element={<ModelsForm />} />
          <Route path="models/form/:id" element={<ModelsForm />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
