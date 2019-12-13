import React from 'react';
import './Cart.css';

export class Cart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    render(){
        return(
            
                <div className = "right-container">
                    <h1>Cart</h1>
                    <hr /> 
                    <div className = "clear-cart">
                        <img src = "clearcart.png" title="Clear Cart" onClick = {this.props.clearCart} />
                        <span> Clear Cart </span>
                    </div>
                    <ul>   
                            {this.props.selectedItems.map(item => <li>{item.name} <img src="delete.png" title="Remove" onClick = {() => this.props.handleDelete(item.id)}/></li>)}      
                    </ul>
                </div>  
                
        );
    }

}