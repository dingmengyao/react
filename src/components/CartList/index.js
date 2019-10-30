import React, { Component } from 'react';

import './index.css'

import {increment,decrement} from '../../actions/cart'
class CartList extends Component {
    constructor(){
        super()
        this.state = {
            cartList:[]
        }
    }
    // static getStateFromProps
    componentDidMount(){
        this.setState({
            cartList:this.props.store.getState().cart
        })
    }
    render() {
        console.log(this.state.cartList)
        return (
            <div className="shoping-list" style={{marginTop:'50px',marginBottom:'50px'}}>
                <table border={1} width={500}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>商品名称</th>
                            <th>单价(元)</th>
                            <th>数量</th>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cartList.map(item =>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button>+</button>
                                            <span>{item.amount}</span>
                                            <button>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        );
    }
}
import { format } from 'url';

export default CartList;