function Product(props) {
    const title = props.title;
    const img = props.img;
    const description = props.description;

    return (
        <div>

            <div className="card border-0" style={{ backgroundColor: "rgba(250, 250, 250)" }}>
                <img src={img} alt="" />
                <div className="card-body mx-auto" className="nav-link">
                    {title}
                    <p className="card-text" style={{ textAlign: "center" }}>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default Product;
