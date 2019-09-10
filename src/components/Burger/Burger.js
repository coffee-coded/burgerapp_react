import React from 'react'
import css from './Burger.css'
import BurgerIngrediants from "./Ingrediants/Ingrediants";

const Burger = (props) => {

    return (
        <div className={css.Burger}>
            Inside Burger
            <BurgerIngrediants type="bread-top"/>
            <BurgerIngrediants type="cheese"/>
            <BurgerIngrediants type="meat"/>
            <BurgerIngrediants type="bread-bottom"/>
        </div>
    );
};

export default Burger;