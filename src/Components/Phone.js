import React from 'react';

const Phone = (props) => {
return (


              <div className="carouselPhone">
                <img className="carouselImage" src={props.phoneInfo.pictures[0]} alt="" />
                  <div className="phoneModel">{props.phoneInfo.model}</div>
              </div>

    
)   

}


export default Phone;


