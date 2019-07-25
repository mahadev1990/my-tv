import React from 'react';
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';

const navigation = props => {
    return (
        <div className={styles.Navigation}>
            <ul >
                <li><NavLink to='/discover' activeClassName={styles.active} exact={true}>Discover</NavLink></li>
                <li><NavLink to='/saved' activeClassName={styles.active} exact={true}>Saved</NavLink></li>
                <li><NavLink to='/guide' activeClassName={styles.active} exact={true}>Guide</NavLink></li>
                <li><NavLink to='/on-now' activeClassName={styles.active} exact={true}>On now</NavLink></li>
                <li><NavLink to='/search' activeClassName={styles.active} exact={true}>search</NavLink></li>
            </ul>
        </div>
    )
}

export default navigation;