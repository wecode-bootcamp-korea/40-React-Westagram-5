import React, { useState } from 'react';
import './Login.scss';
// import { useNavigate } from 'react-router-dom';

function LoginSuin() {
  //초기값
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  //이벤트 참조 값으로 바꾸어주는 함수
  const onChangeId = e => {
    setId(e.target.value);
  };
  console.log('id:', id);

  const onChangePw = e => {
    setPw(e.target.value);
  };
  console.log('password:', pw);

  return (
    <>
      <div className="login">
        <div className="login_box">
          <div className="login_logo">
            <h1>Westagram</h1>
          </div>

          <div className="login_container">
            <input
              type="text"
              className="login_id"
              placeholder="전화번호, 사용자이름 혹은 이메일"
              value={id}
              onChange={onChangeId}
              //이벤트 객체의 value 값을 받아온다는 함수를 넣기
            />
            <input
              type="password"
              className="login_pw"
              placeholder="비밀번호"
              value={pw}
              onChange={onChangePw}
              //이벤트 객체의 value 값을 받아온다는 함수를 넣기
            />
          </div>
          <div>
            <button className="login_button" disabled={true}>
              로그인
            </button>
          </div>
          <a className="login_askpassword!">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </>
  );
}

export default LoginSuin;
