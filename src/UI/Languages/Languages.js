import React,{ useState,useEffect } from 'react';
import classes from './Languages.css';

import Language from './Language/Language';

const languages = ['javascript','angular','python','node','react','java','php','vue'];
const icons     = ['fab fa-js-square','fab fa-angular','fab fa-python','fab fa-node-js','fab fa-react','fab fa-java','fab fa-php','fab fa-vuejs'];
const bgColor   = ['#f1e05a','#de4e4e','#3572A5','#de6d4e','#39d4c4','#b07219','#4F5D95','#2c3e50'] 

const checkWidth = () => window.innerWidth > 480;

const Languages = props => {

    const [ windowWidth,setWindowWidth ] = useState(checkWidth());
    
    useEffect(()=>{
        
        let timerID = null;
        const updateDimension = () => {
            clearTimeout(timerID);
            timerID = setTimeout(() => setWindowWidth(checkWidth()),100);
        }
        window.addEventListener('resize',updateDimension);
        return () => window.removeEventListener('resize',updateDimension);
    },[]);


    const selectLanguage = event => {
        console.log(event.target.getAttribute('name'))
        props.queryLanguage(encodeURIComponent(event.target.getAttribute('name')));
    }
    return (

        <div className={classes.LanguagesContainer}>
            {
                languages.map((language,index)=>{
                    return <Language windowWidth={windowWidth} key={language} language={language} icon={icons[index]} select={selectLanguage} bgColor={bgColor[index]}  />
                })
            }
        </div>
    )
}

export default Languages;
