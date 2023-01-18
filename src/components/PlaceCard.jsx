const PlaceCard = ({place, deletePlace, editPlace}) => {
    return (  
        <>
            <div className="placeCard">
                <img src={place.image} alt="place" />
                <div className="info">
                    <p>{place.location}</p>
                    <h3>{place.title}</h3>
                    <p>{place.about}</p>
                    <p>{place.arAplankyta ? "Aplankyta" : "Ne aplankyta"}</p>
                    <button onClick={() => deletePlace(place.id)}>Delete</button>
                    <button onClick={() => editPlace(place.id)}>Edit</button>
                </div>
            </div>
        </>
    );
}
 
export default PlaceCard;

