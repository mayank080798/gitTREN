import React from 'react'
import classes from './PopularRepo.css';
import starFilled from '../../Assets/Images/starfilled.png';
import forked     from '../../Assets/Images/forked.svg';
import alert      from '../../Assets/Images/alert.svg';

const PopularRepo = props => {
    return (
        <div className={classes.CardContent}>
            <div className={classes.UserImageContainer}>
                <a className={classes.White} href={props.svn_url}><img src={props.owner.avatar_url} alt='' className={classes.UserImage} /></a>
            </div>

            <div className={classes.UserInfo}>
                <h2 style={{wordBreak:'break-all'}}>
                    <a href={props.svn_url}>{props.name}</a>
                </h2>
            </div>

            <div className={classes.GitInfo}>
                <ul>
                    <li className={classes.Followers}>
                        <div className={classes.FollowersCount}>
                            {props.stargazers_count}
                        </div>
                        <span className={classes.FollowersText}>
                            <img className={classes.ColorStar} src={starFilled} alt=''/>
                        </span>
                    </li>
                    
                    <li className={classes.Forked}>
                        <div className={classes.ForkedCount}>
                            {props.forks}
                        </div>
                        <span className={classes.ForkedText}>
                            <img className={classes.ColorForked} src={forked} alt='' />
                        </span>
                    </li>
                    
                    <li className={classes.Alert}>
                        <div className={classes.AlertCount}>
                            {props.open_issues}
                        </div>
                        <span className={classes.AlertText}>
                            <img className={classes.ColorAlert} src={alert} alt='' />
                        </span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default PopularRepo
