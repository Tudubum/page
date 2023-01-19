import React from "react";

const AddPlaceForm = ({title,setTitle,image,setImage,location,setLocation,about,setAbout,arAplankyta, setArAplankyta, addPlace}) => {
        return ( 
        <>
            <div className="placeForm">
                <form onSubmit={addPlace}>
                    <label>
                        Pavadinimas:
                        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
                    </label>
                    <label>
                        Nuotrauka URL:
                        <input type="text" value={image} onChange={(e)=> setImage(e.target.value)} />
                    </label>
                    <label>
                        Lokacija:
                        <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} />
                    </label>
                    <label>
                        Aprašymas:
                        <input type="text" value={about} onChange={(e)=> setAbout(e.target.value)} />
                    </label>
                    <label>
                        Ar esi buvęs?
                        <input type="checkbox" className="checkboxas" value={arAplankyta} onChange={(e)=> setArAplankyta(e.target.checked)} />
                    </label>
                    <button type="submit">Pridėti naują vietą</button>
                </form>
            </div>
        </> );
    }
 
export default AddPlaceForm;
