import React from 'react';

const CocktailDisplay = (props) => {
    const {cocktail, margin, sum} = props 
    console.log(cocktail, margin)
    return (
        <div>
           {cocktail.map(cocktail => <ul><li>{cocktail.oz} OZ of {cocktail.ingname} @ {cocktail.ppo} = ${cocktail.ozppo}</li></ul>)}
           Total{sum}Margin:{margin} 
        </div>
    );
};

export default CocktailDisplay;