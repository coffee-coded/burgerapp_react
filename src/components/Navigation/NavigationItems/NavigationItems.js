import React from 'react'
import css from './NavigationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationList from "./NavigationList/NavigationList";

const navigationItems = () =>(
    <ul className={css.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;