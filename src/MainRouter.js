import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Users from './user/Users'
import AxiosTest from './pages/AxiosTest'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
//import PrivateRoute from './auth/PrivateRoute'
import Menu from './pages/Menu'

class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (<div>
      <Menu/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/axios" Component={AxiosTest}/>
        <Route path="/users" Component={Users}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/signin" Component={Signin}/>
        <Route path="/user/edit/:userId" Component={EditProfile}/>
        <Route path="/user/:userId" Component={Profile}/>
      </Routes>
    </div>)
  }
}

export default MainRouter
