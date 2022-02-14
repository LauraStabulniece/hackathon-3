import HomePageCategories from '../Components/HomePageCategories'
import { Link } from "react-router-dom";


function HomeCategories() {

    const category1 = {

        img: '/images/1.jpg',
        title: 'Summer Destination',
        description: '“Traveling: it leaves you speechless, then turns you into a storyteller” - Ibn Battuta',
    }

    const category2 = {
        img: '/images/2.jpg',
        title: 'Winter Destination',
        description: '“A journey of a thousand miles begins with a single step” - Lao Tzu',
    }

    const category3 = {
        img: '/images/3.jpg',
        title: 'Hiking',
        description: '“The most beautiful thing in the world is, of course, the world itself” - Wallace Stevens',
    }

    return (
        <div>
            <p><h1 style={{ marginTop: "30px", fontSize: "50px" }} className="nav-link">CHOOSE ONE:</h1></p>
            <div className="row d-flex">
                <div className="col">
                    <HomePageCategories img={category1.img}/>
                    <Link className="link-primary" className="nav-link" to="" style={{ textDecoration: "none", fontSize: "35px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)"}} to="/summerdestination">{category1.title}</Link>
                    <HomePageCategories description={category1.description}/>
                </div>
                <div className="col">
                    <HomePageCategories img={category2.img} />
                    <Link className="link-primary" className="nav-link" to="" style={{ textDecoration: "none", fontSize: "35px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)"}} to="/winterdestination">{category2.title}</Link>
                    <HomePageCategories description={category2.description}/>
                </div>
                <div className="col">
                    <HomePageCategories img={category3.img} />
                    <Link className="link-primary" className="nav-link" to="" style={{ textDecoration: "none", fontSize: "35px", textAlign: "center", backgroundColor: "rgba(250, 250, 250)"}} to="/hiking">{category3.title}</Link>
                    <HomePageCategories description={category3.description}/>
                </div>
            </div>

        </div>
    )
}

export default HomeCategories;