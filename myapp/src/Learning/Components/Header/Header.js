import React from 'react';
import './Header.css';

export class Header extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            
                <div className = "myapp-header">
                      <img src = "basket.png" />  
                </div>
        );
    }

}