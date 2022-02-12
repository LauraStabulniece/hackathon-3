import { Link } from "react-router-dom";

function HomePageCategories(props) {
    const img = props.img;
    const description = props.description;
    const title = props.title;

    return (
        <div>
            <div className="card">
                <div className="d-flex">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-body">
                            <Link to="/categories">{title}</Link>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCategories;
