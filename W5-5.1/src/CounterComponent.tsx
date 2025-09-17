import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{fontWeight: 'bold', marginBottom:'10px'}}>Counter Exercise - solution</h2>
       <p style={{ fontSize: '40px', color: '#00BFFF', fontWeight: 'bold', margin: '10px 0' }}>{count}</p>
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setCount(count + 1)} 
        style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            margin: '0 5px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>Increase</button>
        <button onClick={() => setCount(count - 1)}
        style={{
            backgroundColor: '#F44336',
            color: 'white',
            padding: '10px 20px',
            margin: '0 5px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>Decrease</button>
        <button onClick={() => setCount(0)}
        style={{
            backgroundColor: '#FF9800',
            color: 'white',
            padding: '10px 20px',
            margin: '0 5px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
