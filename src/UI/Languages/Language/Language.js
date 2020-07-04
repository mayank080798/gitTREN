import React,{ useState } from 'react';
import classes from './Language.css';

const Language = props => {
    const [ toggle,setToggle ] = useState(false);
    return (
        <div className={ props.windowWidth ? classes.Lang : classes.LangSmall} key={props.language}>
            <i 
                class={props.icon} 
                name={props.language} 
                onClick={props.select} 
                onMouseEnter = {()=>setToggle(true)}
                onMouseLeave = {()=>setToggle(false)}
                style={{display: props.windowWidth ? 'inline' : 'none',backgroundColor: toggle ? props.bgColor : '#fff'}} />
            <span 
                className={!props.windowWidth ? classes.Span : null} 
                name={props.language}
                onClick={!props.windowWidth ? props.selectLanguage : null}>{props.language}</span>
        </div>
    )
}

export default Language;
