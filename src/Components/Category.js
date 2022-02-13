import '../Components/Category.css'
import { Link } from "react-router-dom";

function Category(props) {
    const image = props.image;
    const title = props.title;
    const description = props.description;
   
    return (
        <div>
            <hr></hr>
            <div className="row flexcolumn">
                <div className="col-3 columnPadding imgMain">
                    <img src={image} />
                </div>
                <div className="col-9 columnPadding">
                    <h5 className="card-title nav-link">
                        <Link to="/"><h4>{title}</h4></Link>
                    </h5>
                    <p className="travel-text">
                        <p>{description}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Category;