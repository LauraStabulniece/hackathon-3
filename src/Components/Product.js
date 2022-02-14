import { Link } from "react-router-dom";

function Product1(props) {
    const title = props.title;
    const img = props.img;
    const description = props.description;

    return (
        <div>
             
            <div className="card border-0" style={{backgroundColor: "rgba(250, 250, 250)" }}>
                <img src={img} alt="" />
                <div className="card-body mx-auto" className="nav-link">
                    {title}
                    <p className="card-text" style={{textAlign: "center"}}>{description}</p>
                </div>
            </div>
            {/* <div className="card" style={{ marginLeft: "100px", padding: "5px" }}>
                    <img src={img} alt="" />
                    <div className="card-body mx-auto">
                        <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "150%", textAlign: "center" }}>{title}</Link>
                        <p className="card-text" className="nav-link" style={{ fontSize: "110%", textAlign: "center" }}>{description}</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Product1;
