import React from 'react';
import AUX from '../../hoc/AUX'
import css from './Layout.css'

const layout = (props) => (
    <AUX>
        <div> Toolbar, Sidebar, Backdrop</div>
        <main className={css.Content}>
            {props.children}
        </main>

    </AUX>
);


export default layout;