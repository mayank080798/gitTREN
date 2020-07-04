import React,{useState,useEffect,useRef} from 'react'
import classes from './Search.css';
import axios from 'axios';
import UserInformation from './UserInformation/UserInformation';
import RepoInformation from './RepoInformation/RepoInformation';
import Grid from '../../UI/Grid/Grid';
const Search = props => {

    const [ inputValue,setInputValue ]              = useState('');
    const [ userInformation,setUserInformation ]    = useState('');
    const [ userRepo,setUserRepo ]                  = useState([]);
    const inputRef=useRef();
    
    useEffect(()=>{
        const fetchData = async() => {
            if(inputValue){
                try{
                    let response = await axios.get(`https://api.github.com/users/${inputValue}`);
                    if(response){
                        let responseRepo = await axios.get(`https://api.github.com/users/${inputValue}/repos`);
                        setUserInformation(response.data);
                        setUserRepo(responseRepo.data);
                    }
                }catch(e){
        
                }
            }
        }
        const timer = setTimeout(()=>{
            if(inputValue === inputRef.current.value)
                fetchData(inputValue);
        },800);
        return () => clearTimeout(timer);
    },[inputValue,inputRef]);
    
    let userInfo = null;
    let repoInfo = null;
    if(userInformation){
        userInfo = <UserInformation user={userInformation} />
        repoInfo =  <React.Fragment>
                        <h3 style={{textAlign:'center',fontSize:'24px',color:'#063550'}}>Latest Repositories</h3>
                        <Grid>
                        {
                            userRepo.map(repo=>{
                                return <RepoInformation key={repo.id} {...repo} />
                            })
                        }
                        </Grid>
                    </React.Fragment>
    }
    return (
        
        <div className={classes.SearchContainer}>
            <h2 className={classes.Heading}>Search a username</h2>
            <input type="input" autoComplete="off" ref={inputRef} onChange={(e)=>setInputValue(e.target.value)} placeholder='Github Username'/>
            <div className={classes.UserContainer}>
                {userInfo}
                {repoInfo}
            </div>
        </div>
    )
}

export default Search;
