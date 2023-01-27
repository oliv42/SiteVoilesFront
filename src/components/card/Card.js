function Card(props) {

    const curentYear = new Date().getFullYear();
    const yearOfPargliding = parseInt(props.releaseYear) || 1985;
    const isNew = curentYear > yearOfPargliding ? false : true;

    return (
        <div className="card w-96 bg-base-100 shadow-xl border-4">
            <figure>
                <img
                    src="https://i0.hippopx.com/photos/702/245/215/paraglider-paragliding-fly-dom-preview.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.name}
                    {isNew ? <div className="badge badge-secondary">NEW</div> : <div></div>}
                </h2>
                <h3 className="text-left">{props.maker}</h3>
                <div className="card-actions justify-end">
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
