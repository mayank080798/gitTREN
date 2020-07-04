import React from 'react'
import classes from './RepoInformation.css';

import starFilled from '../../../Assets/Images/starfilled.png';
import forked from '../../../Assets/Images/forked.svg';
import code from '../../../Assets/Images/code2.svg';

const RepoInformation = props => {
    return (
        <div className={classes.RepoInfo}>
            <div className={classes.GitInfoOne}>
                <h2 className={classes.Name}><a href={props.svn_url}>{props.full_name.substr(0,15)+'...'}</a></h2>
                <span className={classes.TagLine}>{props.description}</span>
            </div>
            <div >
                <ul className={classes.GitInfoTwo}>
                    <li >
                        <span style={{fontSize:'20px'}}>{props.stargazers_count}</span>
                        <span><img alt='' src={starFilled} style={{width:'25px'}} /></span>
                    </li>
                    <li>
                        <span style={{fontSize:'20px'}}>{props.forks}</span>
                        <span><img alt='' src={forked} style={{width:'15.625px'}} /></span>
                    </li>
                    <li>
                        <span style={{fontSize:'20px'}}>{props.language}</span>
                        <span><img alt='' src={code} style={{width:'25px',height:'20px'}} /></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RepoInformation;
