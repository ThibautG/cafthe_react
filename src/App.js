import './styles/App.css';
import Layout from "./layout/Layout";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Coffee from "./pages/Coffee";
import Tea from "./pages/Tea";
import Accessories from "./pages/Accessories";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Commands from "./pages/Commands";
import CommandDetail from "./components/CommandDetail";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import {CartProvider} from "./context/CartContext";

function App() {
  return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path={"/login"} element={<Login />} />
                            <Route index element={<Home />} />
                            <Route path={"/produit/:id"} element={<ProductDetails />} />
                            <Route path={"/produits/cafes"} element={<Coffee />} />
                            <Route path={"/produits/thes"} element={<Tea />} />
                            <Route path={"/produits/accessoires"} element={<Accessories />} />
                            <Route path={"/profil"} element={<Profil />} />
                            <Route path={"/commandes/clients/:id"} element={<Commands />} />
                            <Route path={"/commandes/:id"} element={<CommandDetail />} />
                            <Route path={"/register"} element={<Registration />} />
                            <Route path={"/panier"} element={<Cart />} />
                        </Route> {/*Cette route n'est pas auto fermante car elle va contenir les routes enfants*/}
                        {/* Gestion des routes non trouvées */}
                        {/*<Route path="*" element={<NotFound />} />*/}
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
  );
}

export default App;
