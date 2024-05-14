// src/components/IngredientList.jsx
import { useState } from 'react'

const IngredientList = ({availableIngredients, setAddIngredient, handleAddIngredient}) => {
    

    return (
    <>
        <ul>
        {availableIngredients.map((ingredient, index) => {
            return (
                
            <li key={index}>
                
                <button style= {{backgroundColor: ingredient.color}} onClick={() => 
                    handleAddIngredient
                    (ingredient)}> {ingredient.name} + </button>
                
            </li>
            );
        })}

        
        </ul>
        </>
    );
  };


  
  export default IngredientList;