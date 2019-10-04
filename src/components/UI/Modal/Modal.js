import React, {Component} from 'react'
import css from './Modal.css'
import AUX from '../../../hoc/AUX'
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("Model will update");
    }


    render() {
        return (
            <AUX>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={css.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </AUX>
        );
    }

};

export default Modal;