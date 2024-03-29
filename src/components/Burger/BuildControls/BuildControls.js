import React from 'react'
import css from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={css.BuildControls}>
        <p>
            Current Price : <strong>{props.price.toFixed(2)}</strong>
        </p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=>props.ingrediantAdded(ctrl.type)}
                removed={()=>props.ingrediantRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={css.OrderButton} disabled={!props.puchaseable}
        onClick={props.ordered}><strong>ORDER NOW</strong></button>
    </div>
);

export default buildControls;
