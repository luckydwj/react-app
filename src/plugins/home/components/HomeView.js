/**
 *  Created by daiwenjuan on 2020/4/16 09:49.
 */
import "./HomeView.css";
import React ,{PureComponent}from "react";
import {Link} from 'react-router-dom'
import EnhanceConnect from '../../../definitions/EnhanceConnect'
import key from '../key'
import {add} from '../index.action'
@EnhanceConnect((states)=>{
 return {
   text:states[key.ID].text
 }
},{add})
class Home extends PureComponent{
  render(){
      const {text,add} =this.props
      return (
        <div>
          <div onClick={()=>{add('我被点击拉')}} style={{cursor:'pointer'}}>点我</div>
          <div>{JSON.stringify(text)}</div>
          <ul>
            <li>
              <Link to={'/page01'}>Page01</Link>
            </li>
            <li>
              <Link to={'/page02'}>Page02</Link>
            </li>
            <li>
              <Link to={'/page03'}>Page03</Link>
            </li>
            <li>
              <Link to={'/page04'}>Page04</Link>
            </li>
          </ul>
        </div>
      );
  }
}
export default Home
