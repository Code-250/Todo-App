import React, {useState} from 'react';
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";


function Todo ({text}){
    return (
        <div> 
           <li>{text}</li>
            <div className="icons">
                <RiCloseCircleLine/>
                <TiEdit/>
            </div>
        </div>
   )
} 

export default Todo
