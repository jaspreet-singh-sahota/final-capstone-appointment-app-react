import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/actions/user-action/userAction'
import Axios from 'axios'
import request from '../../axios/request'

const LogOut = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  const dispatch = useDispatch()
  const handleLogOut = () => {
    Axios
      .delete(request.logUserOut, { withCredentials: true })
      .then(response => {
        if (response.data.logged_out) {
          dispatch(logOut())
        }
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }
  return (
    <div>
      {isLoggedIn ? <h1 onClick={() => handleLogOut()}>Log Out</h1>: <h1>Log in</h1>}
    </div>
  )
}

export default LogOut
