import React, { useState } from 'react';
import './Login.scss';
// import { useNavigate } from 'react-router-dom';

function LoginSuin() {
  // const [activate, setActivate] = useState(false);

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const disabled = !(id.includes('@') && pw.length >= 5);

  //이벤트 참조 값으로 바꾸어주는 함수
  const onChangeId = e => {
    setId(e.target.value);
    console.log(id);
  };
  console.log('id:', id);

  const onChangePw = e => {
    setPw(e.target.value);
  };
  console.log('password:', pw);

  //조건 : D - @ 포함 / Password  - 5글자 이상
  //조건이 맞으면 버튼활성화, 틀리면 비활성화  (초기값은 비활성화로 유지)
  const activateButton = () => {
    return id.indexOf('@') && pw.length >= 5 ? 'active' : null;
  };

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
              //값으로 state 를 받아온다? -> state 를 보여준다??
              onChange={onChangeId}
              //이벤트 객체의 value 값을 받아온다는 함수를 넣기
              // onKeyUp={activateButton}
              //키가 눌려지고 떼었을 때 ->함수실행-> 입력정보확인 ? 활성화 : 비활성화
            />
            <input
              type="password"
              className="login_pw"
              placeholder="비밀번호"
              value={pw}
              onChange={onChangePw}
            />
          </div>
          <div>
            <button className="login_button" disabled={disabled}>
              {/* 새로 만든 css 클래스명 가져올라면? */}
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
