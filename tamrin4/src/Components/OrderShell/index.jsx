import React from 'react'
import './style.css'
import Header from '../Header'
import List from '../List'
import orders from '../OrderShell/orders.json'

function orderShell(){
    return (
        <section className='wrapper'>
            <Header />
            <List orders={orders} />
        </section>
    )
}

export default orderShell;