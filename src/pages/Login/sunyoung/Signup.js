import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import '../sunyoung/Signup.scss';

// 백엔드와의 통신을 위해 임의로 만든 파일

function Signup() {
  // const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const isValid = userId.includes('@') && userPwd.length >= 5;

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPwd = e => {
    setUserPwd(e.target.value);
  };

  const handleClick = () => {
    console.log(userId, userPwd);
    fetch('http://10.58.52.248:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: userId, password: userPwd }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  };

  return (
    <div className="wrapping">
      <Nav />
      <div className="loginBox">
        <h1 className="logo">westagram</h1>
        <form>
          <div className="inputId">
            <input
              value={userId}
              onChange={saveUserId}
              className="idButton"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
          </div>
          <div className="inputPassword">
            <input
              value={userPwd}
              onChange={saveUserPwd}
              id="input_pwd"
              className="password_button"
              type="password"
              placeholder="비밀번호"
              required
            />
          </div>

          <div>
            <button
              disabled={isValid ? false : true}
              onClick={handleClick}
              className="button_login_default"
              id="login_btn"
              type="button"
              style={
                isValid
                  ? { backgroundColor: '#d52d43' }
                  : { backgroundColor: '#d8818d' }
              }
            >
              회원가입
            </button>
          </div>

          <br />
          <br />
          <br />
          <div className="forgetPassword">
            <a href="ampty"></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
