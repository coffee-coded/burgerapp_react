import React, {Component} from 'react';
import AUX from '../AUX'
import css from './Layout.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    state ={
        showSideDrawer: false,
    };
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevstate) => {
            return {showSideDrawer: !prevstate.showSideDrawer}
        })
    }
    render() {
        return (
            <AUX>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open_side={this.state.showSideDrawer}
                            closed={this.sideDrawerClosedHandler}/>
                <main className={css.Content}>
                    {this.props.children}
                </main>

            </AUX>
        )
    }
};


export default Layout;