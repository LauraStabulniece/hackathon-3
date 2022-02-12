import { Link } from "react-router-dom";

function CategoriesMenu() {

    return (
        <div>
            <div>
                <p>
                    <h1>CATEGORIES</h1>
                </p>
            </div>
            <div className="row">
                <div className="col-sm d-flex" id="category1">
                    <img src="/images/1.jpg" className="card-img-left" alt="" id="categoryImg"/>
                        <div className="card-body">
                            <p><Link className="nav-link" class="card-link" to="">CATEGORY 1</Link></p>
                            <p className="card-text">“Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta</p>
                        </div>
                </div>
                <div className="col-sm d-flex" id="category2">
                    <img src="/images/2.jpg" className="card-img-left" alt="" id="categoryImg"/>
                        <div className="card-body">
                        <p><Link className="nav-link" class="card-link" to="">CATEGORY 2</Link></p>
                            <p className="card-text"> “A journey of a thousand miles begins with a single step” – Lao Tzu</p>
                        </div>
                </div>
                <div class="col-sm d-flex" id="category3">
                    <img src="/images/3.jpg" className="card-img-left" alt="" id="categoryImg"/>
                        <div className="card-body">
                        <p><Link className="nav-link" class="card-link" to="">CATEGORY 3</Link></p>
                            <p className="card-text">“The most beautiful thing in the world is, of course, the world itself” – Wallace Stevens</p>
                        </div>
                </div>
            </div>
        </div>

    )
}
export default CategoriesMenu;