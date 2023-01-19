import './App.css';

import React, { useState, useEffect} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import AddPlaceForm from './components/AddPlaceForm';
import PlaceCard from './components/PlaceCard'


function App() {

const [image, setImage] = useState('');
const [location, setLocation] = useState('');
const [title, setTitle] = useState('');
const [about, setAbout] = useState('')
const [arAplankyta, setArAplankyta] = useState('false');
const [data, setData] = useState(null);
const [editing, setEditing] = useState(null);

const [message, setMessage] = useState('');

const handleSuccess = (message) => {
  setMessage(message);
  setArPrisijunges(true);
}

const [arPrisijunges, setArPrisijunges] = useState(false);
const [users, setUsers] = useState([]);


const fetchData = async () => {
  const dataRestingPlace = await fetch('http://localhost:7000/Restingplace')
    .then(response => response.json());
  setData(dataRestingPlace)
}

const addPlace = async (e) => {
  e.preventDefault();
  if(editing){
    const updatedPlace = { image, location, title, about, arAplankyta };
    await fetch (`http://localhost:7000/Restingplace/${editing}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPlace),
    });
  } else{
    const newPlace = {image, location, title, about, arAplankyta};
    await fetch ('http://localhost:7000/Restingplace',{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlace),
    });
  }
    setImage('');
    setLocation('');
    setTitle('');
    setAbout('');
    setArAplankyta('');
    fetchData();
  }


const editPlace = async (id) => {

  const placeToEdit = data.find(place => place.id === id);
  setImage(placeToEdit.image);
  setLocation(placeToEdit.location);
  setTitle(placeToEdit.title);
  setAbout(placeToEdit.about);
  setArAplankyta(placeToEdit.arAplankyta);
  setEditing(id);
  
}

const deletePlace = async (id) => {
  await fetch(`http://localhost:7000/Restingplace/${id}`, {
    method: 'DELETE',
  });
  fetchData();
}


useEffect(() => {
  if (arPrisijunges) {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }
}, [arPrisijunges]);


useEffect(() => {
  fetchData();
}, []);

  return (
    <>
      <header>
        <Header 
        onSuccess={handleSuccess} 
        arPrisijunges={arPrisijunges}
        users={users}/>
      </header>

      <AddPlaceForm 
        image={image}
        location={location}
        title={title}
        about={about}
        arAplankyta={arAplankyta}
        addPlace={addPlace}
        editing={editing}
        setImage={setImage}
        setLocation={setLocation}
        setTitle={setTitle}
        setAbout={setAbout}
        setArAplankyta={setArAplankyta}
      />

      <div className="visasHeader">
        {data && 
        data.map(item => 
        <PlaceCard
          key={item.id}
          place={item}
          id={item.id}
          deletePlace={deletePlace}
          editPlace={editPlace}
        />
     )}
        {!data && 
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />}
        </div>
  
      <Footer />
    </>
  );
}

export default App;
