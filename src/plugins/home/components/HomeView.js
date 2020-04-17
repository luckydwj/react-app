/**
 *  Created by daiwenjuan on 2020/4/16 09:49.
 */
import "./HomeView.css";
import React from "react";
import {Link} from 'react-router-dom'
export default props => {
  const {state,onClick} =props
  return (
    <div>
      <div onClick={()=>{onClick()}}>点我</div>
      <div>{JSON.stringify(state)}</div>
      <ul>
        <li>
          <Link to={'/Page01'}>Page01</Link>
        </li>
        <li>
          <Link to={'/Page02'}>Page02</Link>
        </li>
        <li>
          <Link to={'/Page03'}>Page03</Link>
        </li>
        <li>
          <Link to={'/Page04'}>Page04</Link>
        </li>
      </ul>
    </div>
  );
};
