import Product from "../Components/Product";
import { Link } from "react-router-dom";
import CategoriesHome from "../Components/CategoriesHome";

function CategoryProduct2() {

    const category2 = {

        img: '/images/91.jpg',
        title: 'Winter',
        description: 'Winter vacations promise a well-needed escape, whether it is from a holiday-hectic December, a bitter January, or a drab February. There something about the season that awakens a person is wanderlust, driving countless people north for the wintery ski slopes or south for the summery skies and warm-weather beaches. There are plenty of exciting travel destinations that become all the more affordable during the winter months—at least one of which is likely a fast flight or even road trip away from your hometown.',
    }
    const product1 = {
        img: '/images/92.jpg',
        title: 'Sweden',
        description: '900 €',
    }
    const product2 = {
        img: '/images/93.jpg',
        title: 'Finland',
        description: '700 €',
    }
    const product3 = {
        img: '/images/94.jpg',
        title: 'Norway',
        description: '2300 €',
    }
    const product4 = {
        img: '/images/96.jpg',
        title: 'Estonia',
        description: '390 €',
    }
    const product5 = {
        img: '/images/95.jpg',
        title: 'Latvia',
        description: '200 €',
    }
    const product7 = {
        img: '/images/97.jpg',
        title: 'Italy',
        description: '980 €',
    }
    const product6 = {
        img: '/images/98.jpg',
        title: 'Georgia',
        description: '470 €',
    }
    const product8 = {
        img: '/images/555.jpg',
        title: 'Austria',
        description: '800 €',
    }
    const product9 = {
        img: '/images/999.jpg',
        title: 'Russia',
        description: '330 €',
    }
    const product12 = {
        img: '/images/55.jpg',
        title: 'Slovakia',
        description: '500 €',
    }
    const product11 = {
        img: '/images/9999.jpg',
        title: 'France',
        description: '500 €',
    }
    const product10 = {
        img: '/images/5555.jpg',
        title: 'Lithuania',
        description: '500 €',
    }

    return (
        <div>
            <p class="subsequence">
                <Link className='subsequenceColour' to="/"><span >Home</span></Link><span> &gt; Winter Destination</span>
            </p>
            <p><h1 style={{ marginTop: "10px", fontSize: "50px" }} className="nav-link">Winter Destination</h1></p>
            <CategoriesHome img={category2.img} title={category2.title} description={category2.description} />
             
            <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                <div className="col-2">
                    <Product img={product1.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product1.title}</Link>
                    <Product description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product2.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product2.title}</Link>
                    <Product description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product3.img} />
                    <Link className="link-dark" to="/norway" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product3.title}</Link>
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



export default CategoryProduct2;
