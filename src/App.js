import React, { Component } from 'react';
import Navbar  from './UI/Navigation/Navigation';
import Trending from './Containers/Trending/Trending';
import BattlePlayers   from './Containers/BattlePlayers/BattlePlayers';
import Home from './Containers/Home/Home';
import Popular  from './Containers/Popular/Popular';
import classes from './App.css';

import { Switch,Route,Redirect } from 'react-router-dom';

class App extends Component {

  state = {
    content : true,
    showSideDrawer : true
  }
  componentWillMount(){
    this.updateDimension();
    window.addEventListener('resize',this.updateDimension.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimension.bind(this));
  }
  updateDimension = () => {
      this.setState({showSideDrawer:window.innerWidth>480});
  }

  render() {
    console.log(this.state);
    let contentCls = this.state.showSideDrawer ? ( !this.state.content ? classes.True : classes.False ) : classes.Null
    return (
      <div className="App">
        <Navbar setContent={(value)=>this.setState({content:value})} show={this.state.showSideDrawer} />
        <div className={contentCls} >
          <Switch>
            <Route path='/'   exact  component = {Home}/>
            <Route path='/trending'  component = {Trending} />
            <Route path='/popular'   component = {Popular}  />
            <Route path='/battle'    component = {BattlePlayers}   />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
