import React, {Component} from 'react'
import AUX from '../../../hoc/AUX'
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("updated")
    }

    render() {


        const ingredientSummary = Object.keys(this.props.ingrediants).map(igkey => {
            return <li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingrediants[igkey]}
            </li>
        });

        return (
            <AUX>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}

                </ul>
                <p>
                    Total Price : <strong>{this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout!</p>
                <Button btntype="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btntype="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </AUX>
        );
    }
};


export default OrderSummary;