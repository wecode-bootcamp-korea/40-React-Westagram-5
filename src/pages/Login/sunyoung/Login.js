import React, { useState, useEffect } from 'react';
import '../sunyoung/Login.scss';
import { useNavigate } from 'react-router-dom';

function LoginSunyoung() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPwd = e => {
    setUserPwd(e.target.value);
  };

  return (
    <div className="wrapping">
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
            ></input>
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
          <button
            onClick={() => navigate('/main-sunyoung')}
            id="login_btn"
            className="button_login"
          >
            로그인
          </button>

          <br />
          <br />
          <br />
          <div className="forgetPassword">
            <a href="ampty">비밀번호를 잊으셨나요?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSunyoung;
