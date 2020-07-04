import React from 'react'
import classes from './UserInformation.css';
const UserInformation = props => {
    return (
        <div className={classes.UserInformation}>
            <div className={classes.UserImageContainer}>
                <img src={props.user.avatar_url} alt='' className={classes.UserImage} />
                <div className={classes.UserInfo}>
                    <div className={classes.Info}><a style={{textDecoration:'none'}} href={props.user.html_url}>{props.user.name}</a></div>
                    <div className={classes.Info}>{props.user.location}</div>
                </div>
            </div>
            <div className={classes.GitInfo}>
                <ul className={classes.Column}>
                    <li className={classes.Row}>
                        <span>Username</span>
                        <span>{props.user.login}</span>
                    </li>
                    <li className={classes.Row}>
                        <span>Company</span>
                        <span>{props.user.company}</span>
                    </li>
                    <li className={classes.Row}>
                        <span>Website</span>
                        <span>{props.user.blog.substr(0,10)+'....'}</span>
                    </li>
                    <li className={classes.Row}>
                        <span>Followers</span>
                        <span>{props.user.followers}</span>
                    </li>
                    <li className={classes.Row}>
                        <span>Total Stars</span>
                        <span>{props.user.following}</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default UserInformation;
