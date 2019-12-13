import React from 'react';
import { Cart } from '../Cart/Cart';
import './Basket.css';

export class Basket extends React.Component {

    constructor(){
        super();
        this.state = {
            listOfItems:[],
            selectedItems:[],
        }

        this.addToBasket = this.addToBasket.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        fetch('list.json')
        .then(response => response.json())
        .then((data) => {
            this.setState({
               listOfItems: data,
            })
        })
    }

    addToBasket(index){
        this.setState({
            selectedItems : this.state.selectedItems.concat(this.state.listOfItems[index]),
        })
    }

    clearCart(){
        this.setState({
            selectedItems:[],
        })
    }

    handleDelete(id){
        const updatedArray = this.state.selectedItems.filter(item => {
                return item.id != id;
        } )
        console.log(updatedArray);

        this.setState({
            selectedItems: updatedArray,
        })
    }

    render(){
        return(
            
                <div className = "container">
                      <div className = "left-container">
                          <h1> Groceries </h1>
                          <hr /> 
                          <ul>   
                            {this.state.listOfItems.map((item,index) => <li  title="Click to Add to Cart" onClick = {() => this.addToBasket(index)}>{item.name}</li>)}      
                          </ul>
                      </div>
                      <Cart selectedItems = {this.state.selectedItems} clearCart = {this.clearCart} handleDelete = {this.handleDelete}/>
                </div>
        );
    }

}