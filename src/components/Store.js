import React, { useState } from 'react';
import api from './PracticeApi'
import Substore from './Substore'
import Menu from './menuApi'
const Store=()=>{
    const [StoreData,setStoreData]=useState(api);
    // const [menuData2,setmenuData2]=useState(Menu);
    console.log(StoreData);
    // console.log(StoreData2);
    return(
        <Substore data={StoreData}/>
    )

}
export default Store
