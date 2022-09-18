import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Alert from '../../components/shared/Alert';
import Spinner from '../../components/shared/spinner';
import { fetchGithubUserRequest } from '../../store/actions';
import { UserData } from '../../store/reducer/users/type';
import { ProfileContainer, ProfileDetailes, ProfilePicture, UsernameContainer, Wrapper } from './style';

interface ProfilePropsType{
  users:UserData[],
  fetch:()=>void,
  loading:boolean,
  failed:boolean
}

const Profile = (props:ProfilePropsType)=>{
  
  useEffect(() => {
    props.fetch()
  },[])

  const handleProfile = (url:string) =>{
    return window.open(url)
  } 
  console.log(props);
  
  return <Wrapper>{props.failed ? <Alert></Alert> :props.loading ?(props.users.map((user:UserData)=>{
    return <ProfileContainer key={user.id} onClick={()=>handleProfile(user.url)}>
      <ProfilePicture dp={user.avatar_url} />
      <ProfileDetailes>
        <UsernameContainer>
          {user.login}
        </UsernameContainer>
      </ProfileDetailes>
    </ProfileContainer>
  })):<Spinner/>}</Wrapper>
}

const mapStateToProps = (state: any) => {
  
  return {
    users:state.userReducer.usersData,
    loading:state.userReducer.isDataFetched,
    failed:state.alertReducer.isFailed
  }
}
const mapdispatchToProps = (dispatch: Dispatch) => {
  return {
    fetch:()=>dispatch(fetchGithubUserRequest())
  }
}

  export default connect(mapStateToProps, mapdispatchToProps)(Profile)
