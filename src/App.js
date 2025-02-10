import './styles/App.css';
import Layout from "./layout/Layout";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
        <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path={"/produits/:id"} element={<ProductDetails />} />
            </Route> {/*Cette route n'est pas auto fermante car elle va contenir les routes enfants*/}
            {/* Gestion des routes non trouvées */}
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
