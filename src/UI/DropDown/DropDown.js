import React,{ useState } from 'react'
import classes from './DropDown.css';
import FontAwesome from 'react-fontawesome';


const DropDown = props => {
    
    let [containerCls,setContainerClass] = useState([classes.OptionsContainer]);
    
    const toggleLangSelectBox = () => {
        const optionsList = document.querySelectorAll("#Option");
        const selected    = document.querySelector("#selected");
        optionsList.forEach(option=>{
            option.addEventListener("click",()=>{
                selected.innerHTML = option.querySelector("label").innerHTML;
                setContainerClass([classes.OptionsContainer]);
                props.queryLanguage(encodeURIComponent(selected.innerHTML))
            })
        });
        if(containerCls.length === 1)
            setContainerClass([classes.OptionsContainer,classes.Active]);
        else
            setContainerClass([classes.OptionsContainer]);
    };
    const toggleSinceSelectBox = () => {
        const optionsList = document.querySelectorAll("#Option1");
        const selected    = document.querySelector("#selected1");
        optionsList.forEach(option=>{
            option.addEventListener("click",()=>{
                selected.innerHTML = option.querySelector("label").innerHTML;
                setContainerClass([classes.OptionsContainer]);
                props.querySince(encodeURIComponent(selected.innerHTML))
            });
        });
        if(containerCls.length === 1)
            setContainerClass([classes.OptionsContainer,classes.Active]);
        else
            setContainerClass([classes.OptionsContainer]);
    }
    let options = null;
    if(props.type === 'language'){
        options = (
                <React.Fragment>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="javascript" name="javascript" />
                        <label >Javascript</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="python" name="python" />
                        <label  >Python</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="c++" name="c++" />
                        <label  >C++</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="c" name="c" />
                        <label  >C</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="java" name="java" />
                        <label  >Java</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="kotlin" name="kotlin" />
                        <label  >Kotlin</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="go" name="go" />
                        <label  >Go</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="typescript" name="typescript" />
                        <label  >TypeScript</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="vue" name="vue" />
                        <label  >Vue</label>
                    </div>
                    <div className={classes.Option} id="Option">
                        <input type="radio" className={classes.Radio} id="php" name="php" />
                        <label  >PHP</label>
                    </div>
                </React.Fragment>
    )}
    else{
        options = (
            <React.Fragment>
                <div className={classes.Option} id="Option1">
                    <input type="radio" className={classes.Radio} id="today" name="today" />
                    <label  >Today</label>
                </div>
                <div className={classes.Option} id="Option1">
                    <input type="radio" className={classes.Radio} id="weekly" name="weekly" />
                    <label  >Weekly</label>
                </div>
                <div className={classes.Option} id="Option1">
                    <input type="radio" className={classes.Radio} id="monthly" name="monthly" />
                    <label  >Monthly</label>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.Container}>
            <div className={classes.SelectBox}>   
                <div className={containerCls.join(' ')}>
                    {options}
                </div>
                <div className={classes.Selected} onClick={ props.type === 'language' ? toggleLangSelectBox : toggleSinceSelectBox } >
                    {
                        props.type === 'language'
                            ?   <span id="selected">Select Language</span>
                            :   <span id="selected1">Since</span>
                    }
                    <FontAwesome name="chevron-down" className={classes.ArrowDown}  />
                </div> 
            </div>
            
        </div>
    )
}

export default DropDown
