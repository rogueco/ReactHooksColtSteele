import React, { useState, useEffect } from 'react'
import { CartItem } from './CartItem'
import './Cart.css'

export const Cart = ({ initialItems }) => {
    const initialState = JSON.parse(window.localStorage.getItem('items'));

    const [items, setItems] = useState(initialState || initialItems);

    useEffect(() => {
        console.log('Hello From useEffect')

        window.localStorage.setItem('items', JSON.stringify(items))
    }, [items])



    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return { ...item, qty: newQty }
            }
            return item;
        })
        setItems(newItems)
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(2)

    return (
        <div className='cart'>
            <h1 className='cart-title'>Shopping Cart</h1>
            <div className='cart-items'>
                {items.map(item => (
                    <CartItem key={item.id} {...item} updateQty={updateQty} />
                ))}
            </div>
            <h2 className='cart-total'>Grand Total &pound;{grandTotal}</h2>
        </div>
    )
}
