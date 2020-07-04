import React from 'react'
import classes from './Developer.css';
import flame from '../../Assets/Images/flame.png';

const ValidateDescription = desc => {
    if(desc)
        return desc.length > 80 ? desc.substr(0,80) + '...' : desc
    else
        return `No Descrption Available.`
}
const ValidateRepoName = name => {
    if(name)
        return name.length > 20 ? name.substr(0,20)+'...' : name;
}


const Developer = props => {
    return (
        <div className={classes.DeveloperCard}>
            <div className={classes.DeveloperHeader}>
                <div className={classes.DeveloperLogo}>
                    <a href={props.url}><img className={classes.DeveloperImg} src={props.avatar} alt='' /></a>
                </div>
                <div className={classes.DeveloperContent}>
                    <h5 className={classes.DeveloperName}>{props.name}</h5>
                    <span style={{fontSize:'16px'}}>{props.username}</span>
                </div>
            </div>
            <div className={classes.DeveloperMain}>
                <div className={classes.DeveloperAbout}>
                    <div className={classes.DeveloperRepoName}>
                        {ValidateRepoName(props.repo.name)}
                    </div>
                </div>
                <div className={classes.DeveloperStatus}>
                    <div className={classes.StatusImage}>
                        <img className={classes.Img} src={flame} alt='' />
                    </div>
                    <div className={classes.RepoCardText}>Popular Repo</div>
                </div>
                <div className={classes.DeveloperDescription}>
                        <p>{ValidateDescription(props.repo.description)}</p>
                    </div>
            </div>
        </div>
    )
}

export default Developer;
