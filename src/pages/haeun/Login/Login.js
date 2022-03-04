import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
function Login() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate('/list');
  };
  return (
    <div class="loginHaeun">
      <div className="card">
        <h1 id="title">Webucks</h1>
        <div className="form">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="cardElements inputElements"
            id="id"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="cardElements inputElements"
            id="passWord"
          />
        </div>
        <button
          className="cardElements disabledBtn"
          id="loginBtn"
          onClick={goToList}
        >
          로그인
        </button>
        <p className="findPw">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
