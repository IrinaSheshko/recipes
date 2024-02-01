import './App.css';
import { useEffect, useState } from 'react';
import video from './Avocado.mp4';
import React from 'react';
import MyRecipesComponent from './MyRecipesComponent';



function App() {
   const API_ID = "9031c3d1";
   const API_KEY = "17220e7a827de69a2191f2360a09f85f";

   const [mySearch, setMySearch] = useState("");
   const [myRecipes, setMyRecipes] = useState([]);
   const [wordSubmitted, setWordSubmit] = useState("avocado");
   
   useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
    fetchData()
   }, [wordSubmitted])

   const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
   }
   const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmit(mySearch);
   }

  return (
    <div className='App'>

      <div className='container'>
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
          <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
         <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
         </form>
         </div>
      <div className='container'>
          <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency-systems-filled/30/null/search-more.png" className='icons' alt="lupa"/>
         </button>
      </div>

      <div>
          {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        />
           ))}
      </div>
     </div>
   
  );
}

export default App;

