import Product from "../Components/Product";
import { Link } from "react-router-dom";
import CategoriesHome from "../Components/CategoriesHome";

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
    const product11 = {
        img: '/images/41.jpg',
        title: 'Portugal',
        description: '2500 €',
    }
    const product10 = {
        img: '/images/51.jpg',
        title: 'Croatia',
        description: '1000 €',
    }
    const product12 = {
        img: '/images/52.jpg',
        title: 'Greece',
        description: '1500 €',
    }

    return (
        <div>
            <p class="subsequence">
                <Link className='subsequenceColour' to="/"><span >Home</span></Link><span> &gt; Hiking</span>
            </p>
            <p><h1 style={{ marginTop: "10px", marginLeft: "60px", fontSize: "50px" }} className="nav-link">Hiking</h1></p>
            <CategoriesHome img={category3.img} title={category3.title} description={category3.description} />
             
            <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                <div className="col-2">
                    <Product img={product1.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product1.title}</Link>
                    <Product description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product2.img} />
                    <Link className="link-dark" to="/courchevel" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product2.title}</Link>
                    <Product description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product3.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product3.title}</Link>
                    <Product description={product3.description} />
                </div>
                <div className="col-2">
                    <Product img={product4.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product4.title}</Link>
                    <Product description={product4.description} />
                </div>
                <div className="col-2">
                    <Product img={product5.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product5.title}</Link>
                    <Product description={product5.description} />
                </div>
                <div className="col-2">
                    <Product img={product6.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product6.title}</Link>
                    <Product description={product6.description} />
                </div>
                </div>
            <div className="row">
                <div className="col-2">
                    <Product img={product7.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product7.title}</Link>
                    <Product description={product7.description} />
                </div>
                
                    <div className="col-2">
                        <Product img={product8.img} />
                        <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product8.title}</Link>
                        <Product description={product8.description} />
                    </div>
                    <div className="col-2">
                        <Product img={product9.img} />
                        <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product9.title}</Link>
                        <Product description={product9.description} />
                    </div>
                    <div className="col-2">
                        <Product img={product10.img} />
                        <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product10.title}</Link>
                        <Product description={product10.description} />
                    </div>
                    <div className="col-2">
                        <Product img={product11.img} />
                        <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product11.title}</Link>
                        <Product description={product11.description} />
                    </div>
                    <div className="col-2">
                        <Product img={product12.img} />
                        <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product12.title}</Link>
                        <Product description={product12.description} />
                    </div>

                </div>
            </div>

    )
}



export default CategoryProduct3;
