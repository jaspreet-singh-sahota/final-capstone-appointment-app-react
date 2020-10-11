import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from '../axios/request'
import Axios from 'axios'
import logIn from '../redux/actions/user-action/userAction'
import { Redirect } from 'react-router'

const LogInPage = () => {
  const user = useSelector(state => state.user.isLoggedIn)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()

  
}

export default LogInPage
