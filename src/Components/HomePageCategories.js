import homeCategories from "./homeCategories";
import { Link } from "react-router-dom";


function HomePageCategories() {

    return (
        <div>
            <h1>Categories</h1>
            <div className="row">
                <div className="col-sm d-flex" style={{ padding: "10px", margin: "0 40px 40px 0" }}>
                    <HomePageCategories title={homeCategories[0].imageUrl} />
                    <div className="card-body">
                        <p><Link className="nav-link" to="">CATEGORY 1</Link></p>
                        <HomePageCategories description={homeCategories[0].description} style={{ font: "small", text: "justify" }} />
                    </div>
                </div>
                <div className="col-sm d-flex" style={{ padding: "10px", margin: "0 40px 40px 0" }}>
                    <HomePageCategories title={homeCategories[1].imageUrl} />
                    <div className="card-body">
                        <p><Link className="nav-link" to="">CATEGORY 2</Link></p>
                        <HomePageCategories description={homeCategories[1].description} style={{ font: "small", text: "justify" }} />
                    </div>
                </div>
                <div className="col-sm d-flex" style={{ padding: "10px", marginBottom: "40px" }}>
                    <HomePageCategories title={homeCategories[2].imageUrl} />
                    <div className="card-body">
                        <p><Link className="nav-link" to="">CATEGORY 3</Link></p>
                        <HomePageCategories description={homeCategories[2].description} style={{ font: "small", text: "justify" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCategories;
