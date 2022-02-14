import Product from "../Components/Product";
import { Link } from "react-router-dom";
import CategoriesHome from "../Components/CategoriesHome";

function CategoryProduct1() {

    const category1 = {

        img: '/images/4.jpg',
        title: 'Summer',
        description: 'Summer is almost here, and with the season comes planning for trips to the beach, mountains, city, or countryside. It’s that time of year: The mercury rises, pulses quicken, and the days get longer. The noisome odors of sunscreen, lighter fluid, and bug spray blend into a symphony of smells, smells that bring with them the feeling of freedom and the distinct sense that life has shifted into a lower gear. Vacation’s just around the corner, and those with the leisure time and money can choose from any number of trips to go on. Not surprisingly, a commonplace of tourist marketing is that the kind of vacation you go on says a lot about who you are. Road trips are a popular summer vacation choice, especially among families, and this summer is the perfect time to embark on your own great road trip, even if it is just for a weekend. No matter how many passport stamps you have collected or countries you have checked off your list, there is always a new corner of the globe left to discover. From road trips to train adventures to safaris, consider these summer vacation ideas for your next getaway.',
    }
    const product1 = {
        img: '/images/2grandcanyon.jpg',
        title: 'Peru',
        description: '1900 €',
    }
    const product2 = {
        img: '/images/88.jpg',
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
    const product7 = {
        img: '/images/8mexico.jpg',
        title: 'Mexico',
        description: '3200 €',
    }
    const product6 = {
        img: '/images/7alpine.jpg',
        title: 'Alpine',
        description: '870 €',
    }
    const product11 = {
        img: '/images/6northkorea.jpg',
        title: 'Japan',
        description: '3100 €',
    }
    const product9 = {
        img: '/images/9.jpg',
        title: 'Paris',
        description: '820 €',
    }
    const product10 = {
        img: '/images/10newyork.jpg',
        title: 'Ney York',
        description: '1900 €',
    }
    const product8 = {
        img: '/images/44444.jpg',
        title: 'Chile',
        description: '1900 €',
    }
    const product12 = {
        img: '/images/4444.jpg',
        title: 'London',
        description: '600 €',
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12 my-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active nav-link" aria-current="page">
                                Summer Destination
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <p><h1 style={{ marginTop: "10px", fontSize: "50px" }} className="nav-link">Summer Destination</h1></p>
            <CategoriesHome img={category1.img} title={category1.title} description={category1.description} />

            <div className="row" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <div className="col-2">
                    <Product img={product1.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product1.title}</Link>
                    <Product description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product2.img} />
                    <Link className="link-dark" to="/bali" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product2.title}</Link>
                    <Product description={product2.description} />
                </div>
                <div className="col-2">
                    <Product img={product3.img} />
                    <Link className="link-dark" to="" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product3.title}</Link>
                    <Product description={product3.description} />
                </div>
                <div className="col-2">
                    <Product img={product4.img} />
                    <Link className="link-dark" to="/bali" className="nav-link" style={{ textDecoration: "none", fontSize: "30px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)" }}>{product4.title}</Link>
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



export default CategoryProduct1;





