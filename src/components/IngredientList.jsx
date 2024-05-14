// src/components/IngredientList.jsx
const IngredientList = () => {
    const [addIngredient, setAddIngredient] = useState([]);
    const [ingredient, setIngredient] = useState([]);

    return 
        <ul>
        {availableIngredients.map((ingredient, index) => {
            <li 
                key={index}>
                <ul>
                    {ingredient.name}
                <button onClick={() => setAddIngredient(ingredient)}>+</button>
                </ul>
            </li>
        })}

        
        </ul>;
  };
  
  export default IngredientList;