import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import '../sunyoung/Login.scss';

function LoginSunyoung() {
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
    fetch('https://10.58.52.248:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ userid: userId, userpwd: userPwd }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        localStorage.setItem('wecode_token', result);
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
              style={
                isValid
                  ? { backgroundColor: '#1877f2' }
                  : { backgroundColor: '#9fcfff' }
              }
            >
              로그인
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

export default LoginSunyoung;
