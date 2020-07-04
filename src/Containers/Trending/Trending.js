import React from 'react';
// import axios from 'axios';
import Grid from '../../UI/Grid/Grid';
import Repository from '../../Components/Repository/Repository';
import { connect } from 'react-redux';
import * as trendingActionCreator from '../../Store/actions/index';
import Developer  from '../../Components/Developer/Developer';
import DropDown from '../../UI/DropDown/DropDown';
import classes from './Trending.css';

class Trending extends React.Component {
    async componentWillMount(){
        this.props.onInitTrending(`https://ghapi.huchen.dev/${this.props.option}?since=monthly`);
    }
    getEndPoint = (option) => {
        let endpoint;
        let sinceWhen = this.props.since || 'monthly';
        let language  = this.props.language;
        let optionFetch    = option ? option : this.props.option
        if(language)
            endpoint = `https://ghapi.huchen.dev/${optionFetch}?language=${this.props.language}&since=${sinceWhen}`;
        else
            endpoint = `https://ghapi.huchen.dev/${optionFetch}?since=${sinceWhen}`;
        this.props.onInitTrending(endpoint);
    }

    handleLanguage = lang => {
        this.props.onSetLanguage(lang);
        this.getEndPoint();
    }
    
    handleSince = since => {
        this.props.onSetSince(since);
        this.getEndPoint();
    }

    handleType = option => {
        this.props.onSetType(option);
        // this.getEndPoint();    
    }
    componentWillReceiveProps(nextProps){
        if(this.props.option !== nextProps.option){
            this.getEndPoint(nextProps.option);
        }
    }
    render(){
        let content = null;
        if(this.props.trending && this.props.option === 'repositories'){
            content = this.props.trending.map(data=>{
                return <Repository key={data.name+data.author}  {...data}/>
            });
        }
        else if(this.props.trending && this.props.option === 'developers' ){
            content = this.props.trending.map(data=>{
                return <Developer key={data.name} {...data} />
            })
        }
        return (
            <div>
                <div className={classes.QueryContainer}>
                    <div className={classes.Query}>
                        <span onClick={() => this.handleType('repositories')} className={classes.QueryRepo} style={{color:this.props.option === 'repositories' ? 'rgb(42, 108, 231)' : null}}>REPOSITORIES</span>
                        <span onClick={() => this.handleType('developers')}   style={{color:this.props.option === 'developers' ? 'rgb(42, 108, 231)' : null}}>DEVELOPERS</span>
                    </div>
                    <div className={classes.DropDown}>
                        <DropDown  type='language' queryLanguage = {this.handleLanguage} />
                        <DropDown  type='since'    querySince    = {this.handleSince} />
                    </div>
                </div>
                <Grid>
                    {content}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        trending    :   state.trending.trending,
        language    :   state.trending.language,
        since       :   state.trending.since,
        option      :   state.trending.option,
        loading     :   state.trending.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInitTrending  :   (endPoint)          => dispatch(trendingActionCreator.initTrending(endPoint)),
        onSetLanguage   :   (language)          => dispatch(trendingActionCreator.setLanguage(language)),
        onSetSince      :   (since)             => dispatch(trendingActionCreator.setSince(since)),
        onSetType       :   (option)            => dispatch(trendingActionCreator.setType(option)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Trending);
