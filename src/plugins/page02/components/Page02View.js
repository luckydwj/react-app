/**
 *  Created by daiwenjuan on 2020/4/17 09:04.
 */
import React from 'react'

export default (props)=>{
  return <div>
    <div style={{cursor:'pointer'}} onClick={()=>{props.history.goBack()}}>返回</div>
    Page01
  </div>
}