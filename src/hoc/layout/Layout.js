import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import classes from './Layout.module.scss';

const layout = props => {
    return (
        <React.Fragment>
            <Navigation />
            <main className={classes.Layout}>{props.children}</main>
        </React.Fragment>
    );
}

export default layout;