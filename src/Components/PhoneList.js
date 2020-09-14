import React, { Component } from 'react';

import Phone from "./Phone";
import Filter from "./Filter";


const PhoneList = (props) => {
    return (
          <>
            <div className="filter"><Filter /></div>
            <div className="phoneList">
                {props.phoneInfo.map(phone => <Phone phoneInfo={phone} key={phone.id} />)}
            </div>
          </>
    )
}




export default PhoneList;
