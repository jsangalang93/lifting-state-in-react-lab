// `src/components/BurgerStack.jsx`
const BurgerStack = ({availableIngredients, 
                    handleRemoveIngredient,
                    stack}) => {

    return (
    <>
        <ul>
            {stack.map((ingredient, index) => {
                return (

                    <li key={index}>

        
        <button style= {{backgroundColor: ingredient.color}} onClick={()=> handleRemoveIngredient(ingredient)}> {ingredient.name} - </button>
            
            </li>
            );
            })}
       
        </ul>            
        </>
    ); 
};

  
  export default BurgerStack;