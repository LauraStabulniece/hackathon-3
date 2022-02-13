import Category1 from "../Components/Category1";
import Product1 from "../Components/Product1";
import { Link } from "react-router-dom";

function CategoryProduct1() {

    const category1 = {

        img: '/images/4.jpg',
        title: 'Summer',
        description: 'Summer is almost here, and with the season comes planning for trips to the beach, mountains, city, or countryside. It’s that time of year: The mercury rises, pulses quicken, and the days get longer. The noisome odors of sunscreen, lighter fluid, and bug spray blend into a symphony of smells, smells that bring with them the feeling of freedom and the distinct sense that life has shifted into a lower gear. Vacation’s just around the corner, and those with the leisure time and money can choose from any number of trips to go on. Not surprisingly, a commonplace of tourist marketing is that the kind of vacation you go on says a lot about who you are. Road trips are a popular summer vacation choice, especially among families, and this summer is the perfect time to embark on your own great road trip, even if it is just for a weekend. No matter how many passport stamps you have collected or countries you have checked off your list, there is always a new corner of the globe left to discover. From road trips to train adventures to safaris, consider these summer vacation ideas for your next getaway.',
    }
    const product1 = {
        img: '/images/2grandcanyon.jpg',
        title: 'Canyon',
        description: '1900 €',
    }
    const product2 = {
        img: '/images/1bali.jpg',
        title: 'Bali',
        description: '2000 €',
    }
    const product3 = {
        img: '/images/4venice.jpg',
        title: 'Venice',
        description: '600 €',
    }
    const product4 = {
        img: '/images/3florida.jpg',
        title: 'Florida',
        description: '1890 €',
    }
    const product5 = {
        img: '/images/5.jpg',
        title: 'Phuket',
        description: '3600 €',
    }
    const product6 = {
        img: '/images/6northkorea.jpg',
        title: 'N/Korea',
        description: '3100 €',
    }
    const product7 = {
        img: '/images/7alpine.jpg',
        title: 'Alpine',
        description: '870 €',
    }
    const product8 = {
        img: '/images/8mexico.jpg',
        title: 'Mexico',
        description: '3200 €',
    }
    const product9 = {
        img: '/images/9.jpg',
        title: 'Paris',
        description: '820 €',
    }
    const product10 = {
        img: '/images/10newyork.jpg',
        title: 'NewYork',
        description: '1900 €',
    }

    return (
        <div>
            <p class="subsequence">
                <Link className='subsequenceColour' to="/"><span >Home</span></Link><span> &gt; Summer Destination</span>
            </p>
            <p><h1 style={{ marginTop: "10px", fontSize: "50px" }} className="nav-link">Summer Destination</h1></p>
            <Category1 img={category1.img} title={category1.title} description={category1.description} />
            <div className="row">
                <div className="col-2">
                    <Product1 img={product1.img} title={product1.title} description={product1.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product2.img} title={product2.title} description={product2.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product3.img} title={product3.title} description={product3.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product4.img} title={product4.title} description={product4.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product5.img} title={product5.title} description={product5.description} />
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <Product1 img={product6.img} title={product6.title} description={product6.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product7.img} title={product7.title} description={product7.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product8.img} title={product8.title} description={product8.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product9.img} title={product9.title} description={product9.description} />
                </div>
                <div className="col-2">
                    <Product1 img={product10.img} title={product10.title} description={product10.description} />
                </div>
            </div>
        </div>

    )
}



export default CategoryProduct1;





