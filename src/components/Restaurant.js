import React, { useState } from 'react';
import './style.css'
import Menu from './menuApi'
import Menucard from './Menucard'

const Restaurant=()=>{
    const [menuData,setmenuData]=useState(Menu);
    console.log(menuData);

    const dataset=[...new Set(menuData.map((elem)=>{
       return elem.category
    }))]
    console.log(dataset);
    
    return(
        <Menucard menuData={menuData}/>
    )
    
}
export default Restaurant