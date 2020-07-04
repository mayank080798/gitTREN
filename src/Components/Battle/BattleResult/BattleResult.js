import React from 'react'
import classes from './BattleResult.css';
const BattleResult = props => { 
    console.log(props);
    return (
        <div className={classes.ResultContainer}>
            { props.matchResult 
                    ?   <h1  className={classes.matchResult === 'Winner' ? classes.Success:classes.Defeat}>{props.matchResult}</h1>
                    :   null }
            <div className={classes.UserImageContainer}>
                <img src={props.user.avatar_url} alt='' className={classes.UserImage} />
                <p className={classes.Info}><a href={props.user.html_url} className={classes.Link}>{props.user.login}</a></p>
            </div>      
            <div className={classes.GitInfo}> 
                <ul className={classes.Column}>
                    <li className={classes.GitItem}>
                        <span>Name</span>
                        <span>{props.user.name}</span>
                    </li>
                    <li className={classes.GitItem}>
                        <span>Company</span>
                        <span>{props.user.company ? props.user.company : 'N/A'}</span>
                    </li>
                    <li className={classes.GitItem}>
                        <span>Location</span>
                        <span>{props.user.location}</span>
                    </li>
                    <li className={classes.GitItem}>
                        <span>Followers</span>
                        <span>{props.user.followers}</span>
                    </li>
                    <li className={classes.GitItem}>
                        <span>Following</span>
                        <span>{props.user.following}</span>
                    </li>
                    <li className={classes.GitItem}>
                        <span>Public Repos</span>
                        <span>{props.user.public_repos}</span>
                    </li>
                    <li className={classes.GitItem}>
                        <span>Repos</span>
                        <span>{props.user.repos_url.length > 20 ? props.user.repos_url.substr(0,20)+'...' : props.user.repos_url}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BattleResult
