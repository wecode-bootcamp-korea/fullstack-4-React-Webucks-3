import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
function Login() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate('/list-haeun');
  };

  //id 값을 저장할 state 선언
  const [id, setId] = useState('');
  //id값을 가져올 함수 선언
  const getId = e => {
    setId(e.target.value);
  };

  //password 값을 저장할 state 선언
  const [password, setPassword] = useState('');
  //password 값을 가져올 함수 선언
  const getPW = e => {
    setPassword(e.target.value);
  };

  //유효성 검사 함수
  const isValid = id.includes('@') && password.length >= 5;

  return (
    <div className="hani-login">
      <div className="card">
        <h1 id="title">Webucks</h1>
        <div className="form">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="cardElements inputElements"
            id="id"
            onChange={getId}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="cardElements inputElements"
            id="passWord"
            onChange={getPW}
          />
        </div>
        <button
          className={
            'cardElements disabledBtn ' + (isValid ? 'activatedBtn' : '')
          }
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
