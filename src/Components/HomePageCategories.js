function HomePageCategories(props) {
    const img = props.img;
    const description = props.description;
    const title = props.title;

    return (

        <div className="card border-0" style={{backgroundColor: "rgb(250, 250, 250)"}} >
            <img src={img} alt="" />
            <div className="card-body">
                {title}
                <p className="card-text" style={{backgroundColor: "rgb(250, 250, 250)", textAlign: "center"}}>{description}</p>
            </div>
        </div>

    )
}


export default HomePageCategories;

