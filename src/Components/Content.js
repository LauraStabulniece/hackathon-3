import { Route, Routes } from "react-router-dom";
import BaliTravel from "../Pages/BaliTravel";
import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/Bali" element={<BaliTravel/>} />
            </Routes>
        </div>
    )
}

export default Content;