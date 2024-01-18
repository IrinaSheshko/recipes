function MyRecipesComponent({label, image, calories, ingredients}){
    return(
        <div>   
            <div className='container'>
                <h2>{label}</h2>
            </div>

            <div className='container'>
                <img className="tasty" src={image} alt="recipe"/>
            </div>
            <ul className="list">
                {ingredients.map(ingredient => (    
                    <li className="chek">
                       <img src="https://img.icons8.com/color/18/null/checked-2--v1.png" 
                       className="icon" alt="chek"/>
                       {ingredient} 
                    </li>
                ))}
            </ul>

            <div className='container'>
              <p className="par">{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}
export default MyRecipesComponent;