import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] =  useState([]);
  const [starships, setStarships] =  useState([]);
  const [vehicles, setVehicles] =  useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }
    async function fetchPlanets(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }
    async function fetchFilms(){
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
    }
    async function fetchSpecies(){
      let res = await fetch('https://swapi.dev/api/species/?format=json');
      let data = await res.json();
      setSpecies(data.results);
    }
    async function fetchStarships(){
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
    }
    async function fetchVehicles(){
      let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
    }
    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
  }, [])
  console.log("data", people);
  console.log("data", planets);
  /*console.log('films', films);
  console.log('species', species);
  console.log('starships', starships);
  console.log('vehicles', vehicles);*/
  return (
    <div className="App">
      Star Wars
    </div>
  );
}

export default App;
