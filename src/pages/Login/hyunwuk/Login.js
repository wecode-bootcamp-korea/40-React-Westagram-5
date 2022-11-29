import React from 'react';
import './LoginHyunwuk.scss';
// import {Link} from 'react-router-dom';

// input onChange console.log 입력 중인 값 출력하기
// state에 위에서 출력한 값 저장하기
// 저장한 값으로 disabled를 변경할 변수 하나 만들기
// button에 위에 값 적용하기

function LoginHyunwuk() {
let 

  return (
    <div>
      <div className="form">
        <div className="box">
          <header className="logo">Westagram</header>
          <section>
            <input onChange={this.handleChange} value={text}/>
            
            ></input>
            <input
              type="text"
              className="password"
              placeholder="비밀번호 입력"
            ></input>
          </section>
          <nav>
            <button className="button" disabled="disabled">
              로그인
            </button>
          </nav>
          <nav className="bottom">
            <a
              className="passFind"
              href="https://www.instagram.com/accounts/password/reset/"
            >
              비밀번호를 잊으셨나요?
            </a>
          </nav>
          <footer className="join">
            계정이 없으신가요?{' '}
            <a
              href="https://www.instagram.com/accounts/emailsignup/"
              className="new"
            >
              가입하기
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LoginHyunwuk;
