import { Link } from "react-router-dom";

function HomePageCategories(props) {
    const img = props.img;
    const description = props.description;
    const title = props.title;

    return (

        <div>
            {/* <div className="col-md-12 p-3">
                <div className="card">
                    <div className="d-flex">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <Link className="link-primary" to="/categories" style={{textDecoration: "none"}}>{title}</Link>
                                <p className="card-text">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} */}

            <div className="card">
                <img src={img} alt="" />
                <div className="card-body">
                    <Link className="link-primary" className="nav-link" to="/summerdestination" style={{ textDecoration: "none", fontSize:"30px" }}>{title}</Link>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>

    )
}



export default HomePageCategories;

