import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as popularActionCreator from '../../Store/actions/index';

import PopularRepo from '../../Components/PopularRepo/PopularRepo';
import Languages from '../../UI/Languages/Languages';
import Grid from '../../UI/Grid/Grid';

class Popular extends Component{

    state = {
        prevY           :   0,
    }

    async componentDidMount(){
        this.props.onInitPopular(`https://api.github.com/search/repositories?q=stars:>1+language=all&sort=stars&order=desc&type=Repositories`);
        let options  = { root:null,threshold:0.1,rootMargin:'0px' }
        this.observer = new IntersectionObserver(this.handleObserver.bind(this),options);
        this.observer.observe(this.loadingRef);
    }

    handleObserver = (entities,observer) => {
        const y = entities[0].boundingClientRect.y;
        if(this.state.prevY > y){
            if(this.props.page<3)
                this.props.onSetPage();
        }
        this.setState({prevY:y});
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.language !== nextProps.language){
            this.props.onInitPopular(`https://api.github.com/search/repositories?q=stars:>1+language=${nextProps.language}&sort=stars&order=desc&type=Repositories`)
        }
    }

    render(){
        let repos = null;
        if(this.props.popularRepos){
            repos = this.props.popularRepos.map((repo,index) => {
                if(index <= (this.props.perPage * this.props.page)){
                    return <PopularRepo key={repo.id} {...repo} />
                }
                return null;
            })
        }
        console.log(repos);
        return (
            <React.Fragment>   
                <Languages queryLanguage = {(language)=>this.props.onSetLanguage(language)} />
                <Grid>
                    {repos}
                </Grid>
                <div style={{height:'100px'}} ref = {loadingRef => this.loadingRef = loadingRef} ></div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        popularRepos : state.popular.popularRepos,
        language     : state.popular.language,
        page         : state.popular.page,
        perPage      : state.popular.perPage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInitPopular  : (endPoint) => dispatch(popularActionCreator.initPopular(endPoint)),
        onSetLanguage  : (language) => dispatch(popularActionCreator.setPopLanguage(language)),
        onSetPage      : ()         => dispatch(popularActionCreator.setPage())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Popular);