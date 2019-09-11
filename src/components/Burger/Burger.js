import React from 'react'
import css from './Burger.css'
import BurgerIngrediants from "./BurgerIngrediants/BurgerIngrediants";

const Burger = (props) => {

    let transformedIngrediants = Object.keys(props.ingrediants)
        .map(igkey => {
            return [...Array(props.ingrediants[igkey])].map((_, i) => {
                return <BurgerIngrediants key={igkey + i} type={igkey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(transformedIngrediants.length ===0){
        transformedIngrediants = <p>Please start adding Ingredients!</p>
    }
    return (
        <div className={css.Burger}>
            <BurgerIngrediants type="bread-top"/>
            {transformedIngrediants}
            <BurgerIngrediants type="bread-bottom"/>
        </div>
    );
};

export default Burger;