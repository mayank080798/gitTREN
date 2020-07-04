import React,{ Component } from 'react';
import Battle from '../../Components/Battle/Battle';
import axios from 'axios';

let initialState = {
    player1         :   '',
    player2         :   '',
    playerOneInfo   :   null,
    playerOneRepo   :   [],
    playerTwoInfo   :   null,
    playerTwoRepo   :   [],
    showPlayer1     :   false,
    showPlayer2     :   false,
    matchResult1    :   null,
    matchResult2    :   null
}

class BattlePlayers extends Component{
    state = initialState;

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleFormOne = (e,player) => {
        e.preventDefault();
        console.log(this.state[player]);
        this.fetchUserData(this.state[player],'showPlayer1');

    }
    handleFormTwo = (e,player) => {
        e.preventDefault();
        console.log(this.state[player]);
        this.fetchUserData(this.state[player],'showPlayer2');
    }

    handleClosePlayer = (player) => {
        this.setState({[player]:false});
    }

    fetchUserData = async(username,player) => {
        try{
            let responseRepo = null;
            let response = await axios.get(`https://api.github.com/users/${username}`);
            if(response){
                responseRepo = await axios.get(`https://api.github.com/users/${username}/repos`);
                if(responseRepo){
                    if(player === 'showPlayer1')
                        this.setState({playerOneInfo:response.data,playerOneRepo:responseRepo.data,[player]:true});
                    else
                        this.setState({playerTwoInfo:response.data,playerTwoRepo:responseRepo.data,[player]:true});
                }
            }
        }catch(e){

        }
    }
    getStars = player => {
        if(player === 'player1')
            return this.state.playerOneRepo.reduce((totalStars,repo)=>totalStars+repo.stargazers_count,0);
        else
            return this.state.playerTwoRepo.reduce((totalStars,repo)=>totalStars+repo.stargazers_count,0);
    }


    handleBeginBattle = (event) => {
        event.preventDefault();
        this.setState({showPlayer1:false,showPlayer2:false})
        let userOneStars = this.getStars('player1');
        let userTwoStars = this.getStars('player2');
        let score1       = this.state.playerOneInfo.followers * 3 + userOneStars;
        let score2       = this.state.playerTwoInfo.followers * 3 + userTwoStars;
        if(score1 > score2)
            this.setState({matchResult1:'Winner',matchResult2:'Loser'});
        else if (score2>score1)
            this.setState({matchResult1:'Loser',matchResult2:'Winner'});
        else
            this.setState({matchResult1:'Tie',matchResult2:'Tie'});
        
        console.log(this.state.matchResult1,this.state.matchResult2);
    }

    render(){
        console.log(this.props.player1,this.props.player2);
        return (
            <React.Fragment>
                <Battle     handleFormOne   =   {this.handleFormOne}
                            handleFormTwo   =   {this.handleFormTwo}
                            handleChange    =   {this.handleChange}
                            showPlayer1     =   {this.state.showPlayer1}
                            showPlayer2     =   {this.state.showPlayer2}
                            playerOneInfo   =   {this.state.playerOneInfo}
                            playerTwoInfo   =   {this.state.playerTwoInfo}
                            playerOneRepo   =   {this.state.playerTwoRepo}
                            playerTwoRepo   =   {this.state.playerTwoRepo}
                            closeUser       =   {this.handleClosePlayer}
                            beginBattle     =   {this.handleBeginBattle}
                            matchResult1    =   {this.state.matchResult1}
                            matchResult2    =   {this.state.matchResult2}
                            resetBattle     =   {(event) => {
                                                    event.preventDefault();
                                                    this.setState({...initialState})
                                                }}/>
            </React.Fragment>
        )
    }
}
export default BattlePlayers;