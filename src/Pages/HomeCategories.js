import HomePageCategories from '../Components/HomePageCategories'

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
            <p><h1 style={{marginTop: "30px", fontSize: "50px"}} className="nav-link">CHOOSE ONE:</h1></p>
            <div className="row d-flex">
                <div className="col">
                <HomePageCategories img={category1.img} description={category1.description} title={category1.title} />
                </div>
                <div className="col">
                <HomePageCategories img={category2.img} description={category2.description} title={category2.title} />
                </div>
                <div className="col">
                <HomePageCategories img={category3.img} description={category3.description} title={category3.title} />
                </div>
        </div>
                
        </div>
    )
}

export default HomeCategories;