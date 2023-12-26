import './style.css'
import OrderItem from '../OrderItem'
import React from 'react';
function List({ orders }) {

    let sum1 = 0
    const sellOrders = orders.filter((order) => order.type === "sell").sort((a, b) => a.price - b.price)
        .map((item, index, array) => {
            sum1 += item.quantity
            return Object.assign(item, { "total": sum1 })
        });

    let sum2 = 0;
    const buyOrders = orders.filter((order) => order.type === "buy").sort((a, b) => b.price - a.price)
        .map((item, index, array) => {
            sum2 += item.quantity
            return Object.assign(item, { "total": sum2 })
        });

    let maxTotal = Math.max(sellOrders[sellOrders.length - 1].total, buyOrders[buyOrders.length - 1].total);
    const newSellOrders = sellOrders.map((item, index) => <OrderItem key={index} amount={item.quantity} price={item.price} type={item.type} total={item.total} maxTotal={maxTotal} />)
    const newBuyOrders = buyOrders.map((item, index) => <OrderItem key={index} amount={item.quantity} price={item.price} type={item.type} total={item.total} maxTotal={maxTotal} />)
    return (
        <div className='list'>
            <div className='list-sell'>{newSellOrders}</div>
            <div className='list_buy'>{newBuyOrders}</div>
        </div>
    )
}

export default List;