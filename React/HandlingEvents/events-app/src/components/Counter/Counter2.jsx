import './counter.css'
import { useState } from "react";
import Button from '../Button/Button';
import Input from '../Input/Input';

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");

//   const name = "Banana";
  const price = 2.99;
  const handlerChange = (value) => {
    setName(value);
  };
  const handlerPlus = () => {
    function myFunc(prevCount) {
        let count = prevCount + 1;
        if (count >= 5) {
          setDiscount(20);
        }
        return count;
      }
      setCount(myFunc);
  };
  const handlerMinus = () => {
    function myFunc(prevCount) {
        let count = prevCount - 1;
        if (count < 5) {
          setDiscount(0);
        }
        return count;
      }
      setCount(myFunc);
  };

  return (
    <>
      <h2>{name}</h2>
      <Button label="-" onClick={handlerMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlerPlus} />
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input value={name} label="Product Name" onChangeEvent={handlerChange} />
    </>
  );
}
export default Counter;