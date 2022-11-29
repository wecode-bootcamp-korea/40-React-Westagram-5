import React, { useState } from 'react';
import './Login.scss';
// import { useNavigate } from 'react-router-dom';

//이 함수가 어떤 값을 불러오는 함수인지 생성하기
// function LoginId(e) {
//   //이벤트를 인자로 받는 함수 생성
//   console.log('lodinid');
function Login() {
  const [id, setId] = useState('');
  const [pw, setpw] = useState('');

  const goMain = id.includes("@") && pw.length >= 5;

  return (
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
          onChange={e=>{
            setId(e.target.value);
          }}
        />
        <input
          type="password"
          className="login_pw"
          placeholder="비밀번호"
          onChange={e=>{
            setPw(e.target.value)}}
        />
      </div>
      <Link to ="/main-suin">
        <button class={goMain ? "loginBtn2 : loginBtn"} disabled={goMain2}>
        //goMain (id input값에 @포함하고 pw input 값의 길이가 5 이상이면) disabled 를 goMain이  true면 비활성화, false 하고 false면 비활성화를 true하라??
          로그인
        </button>
      </Link>
      <a className="login_askpassword!">비밀번호를 잊으셨나요?</a>
    </div>
  </div>
  )
  
}
//   function handleIdInput = e => {
//     setId(e.target.value);
//   };
//   return (  <input
//     type="text"
//     className="login_id"
//     placeholder="전화번호, 사용자이름 혹은 이메일"
//     onChange={handleIdInput} //1️⃣input 창에 onchange event 발생시킴 {실행할 함수 이름}
//   />

//   )
// }

function LoginSuin() {
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
              //state를 id 로 넣음
              // onChange={e => setId(e.target.value)}
               //입력하는 값을 가져와 setid에 적용 / onchange 가 없으면 값을 아무리 바꾸어도 입력창 안에 값이 변하지 않음
              onChange={handleId}
              //값에 따라 동작 넣기
            />
            <input
              type="password"
              className="login_pw"
              placeholder="비밀번호"
              value={pw}
              onChange={e => setPw(e.target.value)}
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
