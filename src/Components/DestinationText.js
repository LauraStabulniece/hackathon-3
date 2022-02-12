import '../Components/Category.css'
import { Link } from "react-router-dom";

function DestinationText(props) {
    return (
        <div className="secondcolumn  seasonclass">
            <h3 className="article-title">{props.title}</h3>
            <p className="article-text">{props.text}</p>
        </div>
    )
}

export default DestinationText;
