import Category2 from "../Components/Category2";
import Product from "../Components/Product";
import { Link } from "react-router-dom";

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
    const product6 = {
        img: '/images/97.jpg',
        title: 'Italy',
        description: '980 €',
    }
    const product7 = {
        img: '/images/98.jpg',
        title: 'Georgia',
        description: '470 €',
    }
    const product8 = {
        img: '/images/99.jpg',
        title: 'Austria',
        description: '800 €',
    }
    const product9 = {
        img: '/images/999.jpg',
        title: 'Russia',
        description: '330 €',
    }
    const product10 = {
        img: '/images/9999.jpg',
        title: 'Slovakia',
        description: '500 €',
    }

    return (
        <div>
            <p class="subsequence">
                <Link className='subsequenceColour' to="/"><span >Home</span></Link><span> &gt; Winter Destination</span>
            </p>
            <p><h1 style={{ marginTop: "10px", fontSize: "50px" }} className="nav-link">Winter Destination</h1></p>
            <Category2 img={category2.img} title={category2.title} description={category2.description} />
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



export default CategoryProduct2;
