import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Greeter from './Greeter';
import { Counter } from './Counter';
import { MoodToggler } from './MoodToggler';
import { Cart } from './Cart';

const items = [
  { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 1.99, qty: 3 },
  { id: 3, name: 'Sour Cream', price: 3.50, qty: 1 }
]

function App () {
  return (
    <Fragment>
      <Cart initialItems={items} />
      <Counter step={5} />
      <Counter />
      <MoodToggler />
      <Navbar />
      <Greeter name='Tom' age='28' excitement={4} />
      <h1>Hello from App!</h1>
    </Fragment>
  );
}

export default App;
