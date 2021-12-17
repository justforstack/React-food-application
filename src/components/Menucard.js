import React from 'react';

const myStyle={color:"red"};
const Menucard=({menuData})=>{
    console.log(menuData);
       return(
        <div>
                         <h1>Restaurant Menu</h1>
           {menuData.map((currentElem)=>{

                return(
                    <div>

   
            <div className="card-container" key={currentElem.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{currentElem.id}</span>
                        <span className="card-author subtle" style={myStyle}>{currentElem.name}</span>
                        <span className="card-description subtle">{currentElem.description}</span>
                    </div>
                </div>
                   
            </div>
                    </div>
                )
           })}
     
        </div>
    )
  

}
export default Menucard;