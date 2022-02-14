import { Link } from "react-router-dom";
import '../Components/Category.css'


function BalliTravel() {
    return (
        <div>
       <div className="row">
                <div className="col-sm-12 my-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/categories">Categories</Link>
                            </li>
                            <li className="breadcrumb-item active nav-link" aria-current="page">
                                Bali
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 col-md-6 " id="fancybox-big-picture">
                    <a data-fancybox href="/images/bali/main.jpg">
                        <img src="/images/bali/main.jpg" className="imgSeason" />
                    </a>
                </div>
                <div className="col-sm-12 col-md-6 text-wrap text-left">
                    <div>
                        <h2 className="nav-link" style={{ fontSize: "50px" }}>Bali</h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>Bali is one of more than 17,000 islands in the Indonesian archipelago and is located just over 2  kilometers (almost 1.5 miles) from the eastern tip of the island of Java and west of the island of Lombok. The island, home to about 4 million people, is approximately 144 kilometres (90 mi.) from east to west and 80 kilometres (50 mi.) north to south. The word "paradise" is used a lot in Bali and not without reason. The combination of friendly, hospitable people, a magnificently visual culture infused with spirituality, and (not least) spectacular beaches with great surfing and diving have made Bali Indonesias unrivaled number one tourist attraction. Eighty percent of international visitors to Indonesia visit Bali and Bali alone. The popularity is not without its flip side— like many places in the islands South, once paradisiacal Kuta has degenerated into a congested warren of concrete with touts and scammers extracting a living by overcharging tourists. The islands visibility has also drawn the unwanted attention of terrorists in 2002 and 2005; however, Bali has managed to retain its magic. Bali is a wonderful destination with something for everyone, and though heavily traveled, it is still easy to find some peace and quiet if you like. Avoid the South of the island if you want a more traditional and genuine Balinese experience. A consideration is the tourist season and Bali can get very crowded in August and September and again at Christmas and New Year. Australians also visit during school holidays in early April, late June, and late September, while domestic tourists from elsewhere in Indonesia visit during national holidays. Outside these peak seasons, Bali can be surprisingly quiet and good discounts on accommodation are often available. The modest dress is expected in Bali. Although bikinis are fine on the beaches and in hotel swimming pools, they are not appropriate while shopping, eating in restaurants.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 col-md-6">
                    <div className="row mt-2">
                        <div className="col-md-4 d-flex justify-content-between">
                            <a data-fancybox href="/images/bali/1.jpg">
                                <img src="/images/bali/1.jpg" className="image-season" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a data-fancybox href="/images/bali/2.jpg">
                                <img src="/images/bali/2.jpg" className="image-season" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a data-fancybox href="/images/bali/3.jpg">
                                <img src="/images/bali/3.jpg" className="image-season" />
                            </a>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 d-flex justify-content-between">
                            <a data-fancybox href="/images/bali/4.jpg">
                                <img src="/images/bali/4.jpg" className="image-season" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a data-fancybox href="/images/bali/5.jpg">
                                <img src="/images/bali/5.jpg" className="image-season" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a data-fancybox href="/images/bali/6.jpg">
                                <img src="/images/bali/6.jpg" className="image-season" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-4 mb-4">
                <div className="col-md-4 text-center">
                    <h3 className="text-danger">2,000 EUR</h3>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default BalliTravel;
