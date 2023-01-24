function Card(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>le type est :{ props.type} Année: <strong>{props.releaseYear}</strong></p>
    </div>
  )
}

export default Card