import '../Components/Category.css'

function FancyBox(props) {
    return (
        <div className="row">

            <div className="row">
                <a href="main.jpg" data-fancybox="gallery">
                    <img src="main.jpg" className="imgSeason" />
                </a>
            </div>
            <div className="row">
                <div className="col-4">
                    <a href='1.jpg' data-fancybox="gallery">
                        <img src='1.jpg' className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="2.jpg" data-fancybox="gallery">
                        <img src="2.jpg" className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="3.jpg" data-fancybox="gallery">
                        <img src="3.jpg" className="image-season" />
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <a href="4.jpg" data-fancybox="gallery">
                        <img src="4.jpg" className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="5.jpg" data-fancybox="gallery">
                        <img src="5.jpg" className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="6.jpg" data-fancybox="gallery">
                        <img src="6.jpg" className="image-season" />
                    </a>
                </div>
            </div>

            <div className="row flexcolumn">
                <h3 class="col-6 priceAndButtonBox travelPrice">{props.travelPrice}</h3>
                <div class="col-6 priceAndButtonBox">
                    <button type="button" class="btn btn-outline-dark">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default FancyBox;

