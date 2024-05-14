// `src/components/BurgerStack.jsx`
const BurgerStack = (availableIngredients, addToBurger) => {

    return 
        <ul>
        availableIngredients.map((ingredient, index) => {
            <li key={index}>
                {ingredient.name}
                
            </li>
        })
        </ul>;
  };
  
  export default BurgerStack;