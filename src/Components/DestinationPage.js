import DestinationText from '../Components/DestinationText'
import FancyBox from '../Components/FancyBox'

import '../Components/Category.css'
import { Link } from "react-router-dom";

function DestinationPage(props) {
    return (
        <div>
            <p class="subsequence">
                <Link className='subsequenceColour' to="/"><span >Home</span></Link><span> > <Link className='subsequenceColour' to={props.categoryLink}><span >{props.categoryName}</span></Link> > {props.title}</span>
            </p>
            <div className="row">
                <div className="col-6">
                    <FancyBox></FancyBox>
                </div>
                <div className="col-6">
                    <DestinationText title={props.title} text={props.text}></DestinationText>
                </div>
            </div>
        </div>
    )
}
export default DestinationPage;

