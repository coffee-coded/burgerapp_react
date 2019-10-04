import React from 'react'
import css from './navigationListItem.css'

const navigationListItem = (props) => (
    <li className={css.NavigationItem}>
        <a
            href={props.link}>
            {props.children} </a>
    </li>
);

export default navigationListItem;