import { Link } from "react-router-dom";

function Product3(props) {
    const title = props.title;
    const img = props.img;
    const description = props.description;

    return (
        <div>
            <div className="row m-1">
                <div className="card" style={{ marginLeft: "100px", padding: "5px" }}>
                    <img src={img} alt="" />
                    <div className="card-body mx-auto">
                        <Link className="link-dark" to="/hiking" className="nav-link" style={{ textDecoration: "none", fontSize: "200%" }}>{title}</Link>
                        <p className="card-text" className="nav-link" style={{ fontSize: "110%" }}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product3;
