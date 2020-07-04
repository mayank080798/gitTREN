import React from 'react'
import classes from './Repository.css';
import styled from 'styled-components';
import starfilled from '../../Assets/Images/starfilled.png';
import starstoday from '../../Assets/Images/starstoday.png';
import forked     from '../../Assets/Images/forked.svg';

const languageColor = language => {
    if(language === 'Shell')            return `#89e051`;
    else if(language === `HTML`)        return `#e34c26`;
    else if(language === `Go`)          return `#00ADD8`;
    else if(language === `TypeScript`)  return `#2b7489`;
    else if(language === `Assembly`)    return `#6E4C13`;
    else if (language === "C++")        return `#f34b7d`;
    else if (language === "C")          return `#555555`;
    else if (language === "JavaScript") return `#f1e05a`; 
    else if (language === "Python")     return `#3572A5`;
    else if (language === "Vue")        return `#2c3e50`;
    else if (language === "Java")       return `#b07219`;
    else if (language === "PHP")        return `#4F5D95`;
    else if (language === `Jupyter Notebook`) return `#DA5B0B`;
    else if (language === `Kotlin`)     return `rgb(255, 81, 0);`
}

const SpanLanguage = styled.span`
    display         :   inline-block;
    width           :   12px;
    height          :   12px;
    border-radius   :   50%;
    background-color:   ${props => languageColor(props.lang)};
    margin-left     :   5px;
    margin-right    :   10px;
`;

const getRepoDescription = (desc) => {
    if(desc)    return desc.length > 80 ? desc.substr(0,80) + '...' : desc;
    else        return `No Description Provided`;
}


const Repository = props => {
    return (
        <div className={classes.RepoCard} >
            
            <div className={classes.RepoHeader}>
                <div className={classes.RepoImage}>
                    <img src={props.avatar} className={classes.Avatar}  alt=''/>
                </div>

                <div className={classes.Author}>
                    <h5>{props.author}</h5>
                </div>
            </div>

            <div className={classes.RepoMain}>
                
                <div className={classes.RepoName}>
                    <a href={props.url}>{ props.name.length > 25
                                            ?   props.name.substr(0,25)+' ....' : props.name }</a>
                </div>


                <div className={classes.RepoAbout}>
                    <div className={classes.RepoAboutLanguage}>
                        <SpanLanguage lang={props.language}></SpanLanguage>
                        {props.language}
                    </div>
                    <div className={classes.RepoAboutDevelopers}>
                        <span className={classes.RepoAboutText}>Built By</span>
                        <span className={classes.RepoAboutImages}>
                            { props.builtBy.map((dev,i=20)=> {
                                return <a key={i}  className={classes.developer} href={dev.href}><img className={classes.TeamImage} src={dev.avatar} alt='' /></a>
                            })}
                        </span>
                    </div>
                </div>
                <div className={classes.RepoDescription}>
                    <p>{getRepoDescription(props.description)}</p>
                </div>
                <div className={classes.RepoRatings}>
                    <div className={classes.GitInfo}>
                        <ul>
                            <li className={classes.Followers}> 
                                <span><img src={starfilled} alt=''/></span>
                                <div>{props.stars}</div>
                            </li>
                            <li className={classes.Stars}>
                                <span><img src={forked} alt='' /></span>
                                <div>{props.forks}</div>
                            </li>
                            <li className={classes.Forked}>
                                <span><img src={starstoday}  alt='' /></span>
                                <div>{props.currentPeriodStars}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Repository;
