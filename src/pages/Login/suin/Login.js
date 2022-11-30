import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginSuin() {
  //🌟id, pw 데이터 값저장위해서 상태값 설정
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  //🌟버튼 비활성화 함수 설정
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
  // const activateButton = () => {
  //   return id.indexOf('@') && pw.length >= 5 ? 'active' : null;
  // };

  //🌟버튼 누르면 메인으로!
  //1. usenavigate를 값으로 갖는 변수를 저장 -구분 편하게 이름 비슷하게 정함
  const navigate = useNavigate();
  //2. 메인으로 가는 함수 저장 -> 버튼 태그 onchange에 사용
  const goToMain = () => {
    navigate('/main-suin');
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
          <div className="button_box">
            <button
              className="login_button"
              disabled={disabled}
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
          {/* Link 로 바꾸어야 하나 */}
          <div className="askpassword_box">
            <a className="login_askpassword!">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSuin;
