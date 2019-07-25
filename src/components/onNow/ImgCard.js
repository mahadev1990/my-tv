import React, { Component } from 'react';
import classes from './OnNow.module.scss';

const ImgCard = (props) => (
    <li>
        <div className={classes.PosterImg}>
            <img src={props.ch.posterUrl} alt={props.ch.Title} />
        </div>
        <div className={classes.Title}>
            <p>
                <span>{props.ch.Title}</span>
            </p>
        </div>
        <p className={classes.ChannelName}>{props.ch.name}</p>
        <p className={classes.Logo}>
            <img src={props.ch.logo} alt={props.ch.name} />
        </p>
    </li>
)

export default ImgCard