import React, { Component } from 'react';
import styles from './BurgerIngrediants.css';
import PropTypes from 'prop-types';

class BurgerIngrediants extends Component {

    render() {
    let ingredient = null;

        switch (this.props.type) {
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={styles.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={styles.Bacon}></div>;
                break;
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngrediants.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngrediants;