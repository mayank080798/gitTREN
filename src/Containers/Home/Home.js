import React from 'react';
import classes from './Home.css';
import githubLogo from '../../Assets/Images/githubnew.svg'
import Search from '../../Components/Search/Search';

class Home extends React.Component{


    render(){
        return(
            <div>
                <div className={classes.GithubIconContainer}>
                    <img src={githubLogo} alt='' className={classes.GithubIcon}/>
                </div>
                <Search  />
            </div>
        )
    }
}

export default Home;