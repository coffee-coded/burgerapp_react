import React, {Component} from 'react'
import css from './NavigationList.css'
import Dropdown from "react-bootstrap/lib/Dropdown";
import NavigationListItem from "./NavigationListItem/NavigationListItem";
import Modal from "../../../UI/Modal/Modal";

class NavigationList extends Component {
    constructor() {
        super()

    }

    state = {
        show: false,
    };

    toggler = () => {

    }

    render() {
        let menu = null;
        if (this.state.show) {
            menu = (
                <div className={css.menu}>
                    <NavigationListItem link="/">Action</NavigationListItem>
                    <NavigationListItem link="/">Another action</NavigationListItem>
                    <NavigationListItem link="/">Something else</NavigationListItem>
                </div>
            )
        }

        return (
            <div className={css.NavigationList}>
                {/*{console.log(click)}*/}
                Dropdown Button
                {console.log(this.state.show,menu)}
                <Modal show={this.state.show} closed={null}>
                    <div className={css.menu}>
                        <NavigationListItem link="/">Action</NavigationListItem>
                        <NavigationListItem link="/">Another action</NavigationListItem>
                        <NavigationListItem link="/">Something else</NavigationListItem>
                    </div>
                </Modal>
            </div>
        );
        //     <div className={css.menu}>
        //         <NavigationListItem link="/">Action</NavigationListItem>
        //         <NavigationListItem link="/">Another action</NavigationListItem>
        //         <NavigationListItem link="/">Something else</NavigationListItem>
        //     </div>
        // </div>
    }
}

export default NavigationList;