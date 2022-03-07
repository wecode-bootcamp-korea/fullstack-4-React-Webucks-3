import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function LoginJugnhoon() {
  return (
    <div className="LoginJunghoon">
      <section className="body">
        <div className="loginBox">
          <div className="container">
            <h1 className="logo">WeBucks</h1>
            <input
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input className="pw" type="password" placeholder="비밀번호" />
            <Link
              to="/list-junghoon"
              className="loginBtn"
              disabled="disabled"
              type="button"
            >
              로그인
            </Link>
            <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default LoginJugnhoon;
