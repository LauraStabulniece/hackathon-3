// import HomeCategories from "./HomeCategories";
// import { Link } from "react-router-dom";


// function HomePageCategories() {
//     const category1 =  [{
//         imageUrl: '/images/1.jpg',
//         description: '“Traveling: it leaves you speechless, then turns you into a storyteller” - Ibn Battuta',
//     }];
//     const category2 = [{
//         imageUrl: '/images/2.jpg',
//         description: '“A journey of a thousand miles begins with a single step” - Lao Tzu',
//     }];
//     const category3 = [{
//         imageUrl: '/images/3.jpg',
//         description: '“The most beautiful thing in the world is, of course, the world itself”  Wallace Stevens',
//     }]

//     return (
//         <div>
//             <h1>Categories</h1>
//             <div className="row">
//                 <div className="col" style={{ padding: "10px", margin: "0 40px 40px 0" }}>
//                     <HomeCategories imageUrl={category1.imageUrl} />
//                     <div className="card-body">
//                         <p><Link className="nav-link" to="/categories">Category 1</Link></p>
//                         <p><HomeCategories description={category1.description} style={{ font: "small", text: "justify" }} /></p>
//                     </div>
//                 </div>
//                 <div className="col" style={{ padding: "10px", margin: "0 40px 40px 0" }}>
//                     <HomeCategories imageUrl={category2.imageUrl} />
//                     <div className="card-body">
//                         <p><Link className="nav-link" to="/categories">Category 2</Link></p>
//                         <p><HomeCategories description={category2.description} style={{ font: "small", text: "justify" }} /></p>
//                     </div>
//                 </div>
//                 <div className="col" style={{ padding: "10px", marginBottom: "40px" }}>
//                     <HomeCategories imageUrl={category3.imageUrl} />
//                     <div className="card-body">
//                         <p><Link className="nav-link" to="/categories">Category 3</Link></p>
//                         <p><HomeCategories description={category3.description} style={{ font: "small", text: "justify" }} /></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomePageCategories;
