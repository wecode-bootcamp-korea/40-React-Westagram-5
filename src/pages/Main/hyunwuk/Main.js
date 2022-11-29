import React, { useState } from 'react';
import './/Main.scss';

function MainHyunwuk() {
  let [color, setColor] = useState('red'); //[1,2]

  return (
    <div>
      <h1 style={{ backgroundColor: color }}>후우....</h1>
      <button onClick={() => setColor('blue')}>배경색 변경</button>;
    </div>
  );
}

export default MainHyunwuk;
