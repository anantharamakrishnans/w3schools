// Input.js

function Input({ value, label, onChangeEvent }) {
    const handlerChangelocal = (event) => {
        onChangeEvent(event.target.value);
    };
    return (
      <div>
        <label>{label}</label>
        <input value={value} onChange={handlerChangelocal} />
      </div>
    );
  }
  export default Input;