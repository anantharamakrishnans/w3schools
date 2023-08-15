import React from 'react'
import { useState } from 'react';


function Counter() {
  const [name, setName] = useState('Fruits');
  const [count, setCount] = useState(0);
    
    const handlerPlus = () => {
        setName(name => {
          return name;
        });
        setCount(count => {
            return count + 1;
        }); 
    };
    const handlerMinus = () => {
        setName(name => {
          return name;
        });
        setCount(count => {
            return count - 1;
        }); 
    };
    return (
    <>
        <h2>{name}</h2>
        <button onClick={handlerMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlerPlus}>+</button>
    </>
  )
}

export default Counter;