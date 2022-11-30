import React, { useState } from 'react';
import './/Main.scss';

// input, 게시 button
// 버튼 누를 때 마다 밑에 여태 입력한 값 추가하기

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
