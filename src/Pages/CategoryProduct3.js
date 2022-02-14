import Category3 from "../Components/Category3";
import Product from "../Components/Product";
import { Link } from "react-router-dom";

function CategoryProduct3() {

    const category3 = {
        
        img: '/images/31.jpg',
        title: 'Hiking',
        description: 'Many enjoy longer or shorter hikes, especially in the summer. Various types of hiking trails are becoming more and more popular and sought-after; moreover, not only short spans for leisurely walks, but also multi-day hikes comprising hundreds of kilometres and several thousand steps to be walked are in high demand. Hiking is an activity of moderate difficulty, which involves walking across long distances generally on trails or paths. The duration of the activity varies between short half-day programs and longer itineraries of over 20 days. It is usually an activity that allows groups of different sizes. Some people love to hike because they love to spend time in nature. Others are after the adrenaline rush and physical challenge of a high ridge. Hiking is such a broad activity. ... No matter the trail or the hiker, though, it is about connecting with nature.',
    }
    const product1 = {
        img: '/images/32.jpg',
        title: 'Peru',
        description: '3900 €',
    }
    const product2 = {
        img: '/images/33.jpg',
        title: 'Courchevel',
        description: '2500 €',
    }
    const product3 = {
        img: '/images/34.jpg',
        title: 'Brazil',
        description: '4300 €',
    }
    const product4 = {
        img: '/images/35.jpg',
        title: 'Iceland',
        description: '6390 €',
    }
    const product5 = {
        img: '/images/36.jpg',
        title: 'Madeira',
        description: '5200 €',
    }
    const product6 = {
        img: '/images/37.jpg',
        title: 'Spain',
        description: '1980 €',
    }
    const product7 = {
        img: '/images/38.jpg',
        title: 'Malta',
        description: '1470 €',
    }
    const product8 = {
        img: '/images/39.jpg',
        title: 'Canada',
        description: '5800 €',
    }
    const product9 = {
        img: '/images/40.jpg',
        title: 'Greenland',
        description: '4330 €',
    }
    const product10 = {
        img: '/images/41.jpg',
        title: 'Portugal',
        description: '2500 €',
    }

    return (
        <div>
            <p class="subsequence">
                <Link className='subsequenceColour' to="/"><span >Home</span></Link><span> &gt; Hiking</span>
            </p>
            <p><h1 style={{ marginLeft: "60px", marginTop: "10px", fontSize: "50px" }} className="nav-link">Hiking</h1></p>
            <Category3 img={category3.img} title={category3.title} description={category3.description} />
            <div className="row">
                <div className="col-2">
                    <Product img={product1.img} title={product1.title} description={product1.description} />
                </div>
                <div className="col-2">
                    <Product img={product2.img} title={product2.title} description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product3.img} title={product3.title} description={product3.description} />
                </div>
                <div className="col-2">
                    <Product img={product4.img} title={product4.title} description={product4.description} />
                </div>
                <div className="col-2">
                    <Product img={product5.img} title={product5.title} description={product5.description} />
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <Product img={product6.img} title={product6.title} description={product6.description} />
                </div>
                <div className="col-2">
                    <Product img={product7.img} title={product7.title} description={product7.description} />
                </div>
                <div className="col-2">
                    <Product img={product8.img} title={product8.title} description={product8.description} />
                </div>
                <div className="col-2">
                    <Product img={product9.img} title={product9.title} description={product9.description} />
                </div>
                <div className="col-2">
                    <Product img={product10.img} title={product10.title} description={product10.description} />
                </div>
            </div>
        </div>

    )
}



export default CategoryProduct3;
