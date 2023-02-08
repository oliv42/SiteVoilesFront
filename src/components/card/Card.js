function Card(props) {
    const currentYear = new Date().getFullYear();
    const imageDefault =
        "https://i0.hippopx.com/photos/702/245/215/paraglider-paragliding-fly-dom-preview.jpg";

    const yearOfParagliding = parseInt(props.releaseYear) || 1985;
    const isNew = currentYear > yearOfParagliding ? false : true;
    const cardImage = props.photos[0] || imageDefault;

    return (
        <div className="border-4 shadow-xl card w-96 bg-base-100">
            <figure>
                <img src={cardImage} alt="Images Paraglider" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.name}
                    {isNew ? <div className="badge badge-secondary">NEW</div> : <div></div>}
                </h2>
                <h3 className="text-left">{props.maker}</h3>
                <div className="justify-end card-actions">
                    <div className="badge badge-outline">{props.type}</div>
                    {props.releaseYear ? (
                        <div className="badge badge-outline">{props.releaseYear}</div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
