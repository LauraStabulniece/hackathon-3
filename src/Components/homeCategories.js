function HomeCategories(props) {
    const imageUrl = imageUrl.props;
    const description = description.props;
    return (

        <div className="card">
            <div className="card-body">
                <img src={imageUrl}/>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default HomeCategories;