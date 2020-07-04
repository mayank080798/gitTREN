import React from 'react';
import classes from './Grid.css';

const Grid = props => {
    return (
        <div className={classes.Grid}>
            <h1>{props.header}</h1>
            <div className={classes.GridContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Grid;