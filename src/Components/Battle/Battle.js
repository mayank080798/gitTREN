import React from 'react'
import classes from './Battle.css';

import BattleResult from './BattleResult/BattleResult';
import users  from '../../Assets/Images/users.svg';
import battle from '../../Assets/Images/fencing.svg';
import trophy from '../../Assets/Images/trophy.svg';
import close  from '../../Assets/Images/close.png';

const Battle = props => {


    let player1 = null;
    let player2 = null;
    
    if(!props.showPlayer1){
        player1 =   <div className={classes.PlayerContainer1}>
                        <form className={classes.Player} id="player1" onSubmit={(event)=>props.handleFormOne(event,'player1')}>
                            <label className={classes.PlayerLabel}>
                                Player One
                            </label>

                            <input type="text" id="username-one" name="player1" className={classes.Username} placeholder="Github Username" autoComplete="off" onChange={props.handleChange}/>
                            <button className={classes.SubmitBtn}>Submit</button>
                            
                        </form>
                    </div>
    }
    else {
        player1 =   <div className={classes.PlayerContainer1}>
                        <div className={classes.PlayerData}>
                            <h3 className={classes.PlayerLabel}>Player One</h3>
                            <div className={classes.PlayerInfo}>
                                <img src={props.playerOneInfo.avatar_url} alt='Profile' className={classes.Avatar}/>
                                <a href={props.playerOneInfo.html_url} className={classes.Link}>{props.playerOneInfo.name}</a>
                                <button className={classes.BtnClear}><img src={close} alt='' onClick={()=>props.closeUser('showPlayer1')} /></button>
                            </div>
                        </div>
                    </div>
    }

    if(!props.showPlayer2){
        player2 =   <div className={classes.PlayerContainer2}>
                        <form className={classes.Player} id="player2" onSubmit={(event)=>props.handleFormTwo(event,'player2')}>
                            <label className={classes.PlayerLabel}>
                                Player Two
                            </label>
                            <input type="text" id="username-two" name="player2" className={classes.Username} placeholder="Github Username" autoComplete="off" onChange={props.handleChange} />
                            <button className={classes.SubmitBtn}>Submit</button>
                            
                        </form>
                    </div>
    }
    else{
        player2 =  <div className={classes.PlayerContainer2}>
                        <div className={classes.PlayerData}>
                            <h3 className={classes.PlayerLabel}>Player Two</h3>
                            <div className={classes.PlayerInfo}>
                                <img src={props.playerTwoInfo.avatar_url} alt='Profile' className={classes.Avatar}/>
                                <a href={props.playerTwoInfo.html_url} className={classes.Link}>{props.playerTwoInfo.name}</a>
                                <button className={classes.BtnClear}><img src={close} alt='' onClick={()=>props.closeUser('showPlayer2')} /></button>
                            </div>
                        </div>
                    </div>
        }

    return (
        <div className={classes.ContentContainer}>
            <div className={classes.InstructionContainer}>
                <h1 style={{textAlign:'center',fontSize:'35px',fontWeight:'600',margin:'20px'}}>Instructions</h1>
                <ol className={classes.BattleInstructions}>
                    <li>
                        <h3 className={classes.HeaderSm} >Enter Two Github Users</h3>
                        <div className={classes.InstructionUser} style={{width:'160px',height:'160px',borderRadius:'20px',backgroundColor:'#f39c83',padding:'10px',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>
                            <img src={users} alt='' width='80px'  />
                        </div>
                    </li>
                    <li>
                        <h3 className={classes.HeaderSm}>Battle</h3>
                        <div style={{width:'160px',height:'160px',borderRadius:'20px',backgroundColor:'#f39c83',padding:'10px',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>
                            <img src={battle} alt='' width='160px'/>
                        </div>
                    </li>
                    <li>
                        <h3 className={classes.HeaderSm}>Check Winner</h3>
                        <div style={{width:'160px',height:'160px',borderRadius:'20px',backgroundColor:'#f39c83',padding:'10px',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>
                            <img src={trophy} alt='' width='160px' />
                        </div>
                    </li>
                </ol>
            </div>

            


            <div className={classes.PlayersContainer}>
                <h1 style={{textAlign:'center',fontSize:'35px',fontWeight:'600',margin:'20px'}}>Players</h1>
                { props.matchResult1 && props.matchResult2
                    ?   <div className={classes.GridContainer}><BattleResult matchResult={props.matchResult1} user={props.playerOneInfo} repo={props.playerOneRepo} /><BattleResult matchResult={props.matchResult2} user={props.playerTwoInfo} repo={props.playerTwoRepo} /></div>
                    :   <div className={classes.GridContainer}>{player1} {player2}</div>   }
        
                { props.showPlayer1 && props.showPlayer2
                    ?   <a  onClick={props.beginBattle} className={classes.BattleBtn} href="/"><span>Battle</span></a>
                    :   null}
                { props.matchResult1
                    ?   <a  onClick={props.resetBattle} className={classes.ResetBtn}  href='/'><span>Reset</span></a>    
                    :   null}
            </div>
        </div>



                
    )
}

export default Battle;
