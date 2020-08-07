import React from 'react'
import './CartItem.css'

export const CartItem = ({ id, name, price, qty, updateQty }) => {
    const addOne = () => {
        updateQty(id, qty + 1)
    }
    const subtractOne = () => updateQty(id, qty - 1)


    return (
        <div className="cartItem">
            <div>{name}</div>
            <div>&pound;{price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty <= 0}>-</button>
                {qty}
                <button onClick={addOne}>+</button>
            </div>
            <div>Total: &pound;{(qty * price).toFixed(2)}</div>
        </div>
    )
}
