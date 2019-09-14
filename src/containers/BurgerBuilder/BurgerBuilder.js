import React, {Component} from 'react'
import AUX from '../../hoc/AUX'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIANT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingrediants: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        puchaseable: false,
        purchasing:false,
    };


    addIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedCount;
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.updatePurchaseState(updatedIngrediants);
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediants});
    };

    removeIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedCount;
        const priceDeduction = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediants});
        this.updatePurchaseState(updatedIngrediants);
    };

    updatePurchaseState(ingrediants) {
        const sum = Object.keys(ingrediants).map(igkey => {
            return ingrediants[igkey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({puchaseable:sum>0});

    };
    purchaseContinueHandler=()=>{
        alert('You Continue!');
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    };
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false});
    };

    render() {
        const disabledInfo = {
            ...this.state.ingrediants
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <AUX>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingrediants={this.state.ingrediants}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingrediants={this.state.ingrediants}/>
                <BuildControls
                    ingrediantAdded={this.addIngrediantHandler}
                    ingrediantRemoved={this.removeIngrediantHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    puchaseable={this.state.puchaseable}/>
            </AUX>

        );
    }
}


export default BurgerBuilder;