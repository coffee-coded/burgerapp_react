import React, {Component} from 'react'
import AUX from '../../hoc/AUX'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


const INGREDIANT_PRICES = {
    salad: 0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};
class BurgerBuilder extends Component{

    state = {
        ingrediants:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    };



    addIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount+1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedCount;
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingrediants:updatedIngrediants})
    };

    removeIngrediantHandler = (type) => {

    };

    render() {
        return(
            <AUX>
                <Burger ingrediants = {this.state.ingrediants}/>
                <BuildControls
                    ingrediantAdded = {this.addIngrediantHandler}/>
            </AUX>

        );
    }
}


export default BurgerBuilder;