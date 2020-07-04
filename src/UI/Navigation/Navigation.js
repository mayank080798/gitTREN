import React,{Component} from 'react'
import classes from './Navigation.css';
import { NavLink } from 'react-router-dom';

import githubLogo from '../../Assets/Images/github-logo.png';


class Navigation extends Component {
    state = {
        checked : true 
    }
    componentWillMount(){
        this.resize();
        window.addEventListener('resize',this.resize.bind(this));
    }
    resize = () => {
        if(window.innerWidth<=480)
            this.setState({checked:false})
    }
    toggleCheckedHandler = () => {
        this.setState({
            checked:!this.state.checked
        },()=> this.props.setContent(this.state.checked));
        
    }
    render(){
        return (
            <div>
                <input type="checkbox" id="check" className={classes.Checkbox} checked={this.state.checked} onChange={this.toggleCheckedHandler}/>
                <header className={classes.Header}>
                    <label htmlFor="check" className={classes.Label}><i class="fas fa-bars" style={{color:'#fff',position:'fixed',cursor:'pointer',margin:'5px 0',left:'40px',fontSize:'24px',transitionProperty:'color'}} ></i></label>
                    <div className={classes.LeftArea}>
                        <h3>Git <span>TREN</span></h3>
                    </div>
                    
                </header>
    
                <div className={classes.SideDrawer} style={{display: this.props.show ? 'block': 'none' }} >
                    <center>
                        <img src={githubLogo} alt='' className={classes.Logo} />
                    </center>
                    <span className={classes.Border}></span>
                    <NavLink to='/' exact   activeClassName={classes.Active}><i class="fas fa-home"></i><span>Home</span></NavLink>
                    <span className={classes.Border}></span>
                    <NavLink to='/popular'  activeClassName={classes.Active}><i class="fas fa-star"></i><span>Popular</span></NavLink>
                    <span className={classes.Border}></span>
                    <NavLink to='/battle'   activeClassName={classes.Active}><i class="fab fa-battle-net"></i><span>Battle</span></NavLink>
                    <span className={classes.Border}></span>
                    <NavLink to='/trending' activeClassName={classes.Active}><i class="fas fa-fire"></i><span>Trending</span></NavLink>
                </div>

                <div className={classes.SmallDrawer} style={{display: !this.props.show ? 'block': 'none' }}>
                    <center>
                        <img src={githubLogo} alt='' className={classes.Logo} />
                    </center>
                    <span className={classes.Border}></span>
                    <NavLink to='/'  exact  activeClassName={classes.Active}><i class="fas fa-home"></i><span>Home</span></NavLink>
                    <span className={classes.Border}></span>
                    <NavLink to='/popular'  activeClassName={classes.Active}><i class="fas fa-star"></i><span>Popular</span></NavLink>
                    <span className={classes.Border}></span>
                    <NavLink to='/battle'   activeClassName={classes.Active}><i class="fab fa-battle-net"></i><span>Battle</span></NavLink>
                    <span className={classes.Border}></span>
                    <NavLink to='/trending' activeClassName={classes.Active}><i class="fas fa-fire"></i><span>Trending</span></NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation;