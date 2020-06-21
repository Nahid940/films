import React from 'react';
import { Link ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'
import {BASE_URL} from '../env'
import {setUserLogout} from '../redux/user/user.actions'

const Header = ({loggedINUser,setUserLogout,history}) =>
{
    const logOut=()=>
    {
        axios.post(BASE_URL+`/logout`,{id:loggedINUser.user.id}).then(response=>
            {
                setUserLogout(null);
                history.push('/')
            }
        )
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className='navbar-brand' to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='navbar-brand' to='/films'>Films</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='navbar-brand' to='/films/create'>Add New Film</Link>
                    </li>
                    {loggedINUser?
                        <li className="nav-item">
                            <Link className='navbar-brand' onClick={logOut} to='/films/create'><span className="text-danger">Log out {loggedINUser.user.name}</span></Link>
                        </li>:<li className="nav-item">
                            <Link className='navbar-brand' to='/login'>Login</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}




const mapStateToProps=(state)=>
({
    loggedINUser:state.user.loggedINUser
})

const mapDispatchToProps=dispatch=>({
    setUserLogout:user=>dispatch(setUserLogout(user))
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))