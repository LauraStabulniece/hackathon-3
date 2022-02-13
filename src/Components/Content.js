import { Route, Routes } from "react-router-dom";
import BaliTravel from "../Pages/BaliTravel";
import NorwayTravel from "../Pages/NorwayTravel";
import Courchevel from "../Pages/Courchevel";
import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";
import CategoryProduct1 from "../Pages/CategoryProduct1";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/summerdestination" element={<CategoryProduct1 />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/Bali" element={<BaliTravel/>} />
                <Route path="/Norway" element={<NorwayTravel/>} />
                <Route path="/Courchevel" element={<Courchevel/>} />
            </Routes>
        </div>
    )
}

export default Content;