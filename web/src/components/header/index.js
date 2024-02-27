import React from "react";

import { Nav } from "./styled";
import { FaHome, FaSignInAlt, FaUser, FaCircle, FaPowerOff } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/auth/actions';
import history from "../../services/history";

export default function Header(){
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }

  return(
    <Nav>
      <Link to="/">
        <FaHome size={24}/>
      </Link>
      <Link to="/register">
        <FaUser size={24}/>
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24}/>
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24}/>
        </Link>
      )}


      {isLoggedIn && <FaCircle size={24} color="#66ff33"/>}
    </Nav>
  )
}
