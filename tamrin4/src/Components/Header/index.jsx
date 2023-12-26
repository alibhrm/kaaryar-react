import './style.css'
import React from 'react';
function header() {
    return (
        <header className='header'>
            <div className='header_row1'>
                <div><h2>Sell</h2></div>
                <div><h2>Buy</h2></div>
            </div>
            <div className='header_row2'>
                <div className='header_row2--column'>Total(SAT)</div>
                <div className='header_row2--column'>Amount(SAT)</div>
                <div className='header_row2--column header_row2--column3'>PRICE()</div>
                <div className='header_row2--column header_row2--column4'>RIAL</div>
                <div className='header_row2--column'>Amount(SAT)</div>
                <div className='header_row2--column'>Total(SAT)</div>
            </div>
        </header>

    )

}

export default header;