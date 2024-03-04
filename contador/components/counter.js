import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="bg-green-200 text-xl p-5">
      <h2 className="text-black">Contador</h2>
      <p className="text-black">El valor actual es: {count}</p>
      <button className="bg-blue-500 text-white p-2 rounded-lg mr-4 text-lg" onClick={increment}>Incrementar</button>
      <button className="bg-red-500 text-white p-2 rounded-lg text-lg" onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Counter;
