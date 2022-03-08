import React, { useEffect, useRef, useState } from 'react';
import './Login.scss';
import LoginSection from './LoginSection';

function Login() {
  const loginBtn = useRef();
  const pwValue = useRef();
  const [id, setId] = useState({
    value: '',
    isActive: false,
  });
  const [pw, setPw] = useState({
    value: '',
    isActive: false,
  });

  // ID 값 변경 및 활성화
  const handleIdInput = e => {
    const { value } = e.target;
    setId({ value: value });
    if (value.includes('@')) {
      setId({ value: value, isActive: true });
    }
  };

  // PW 값 변경 및 활성화
  const handlePwInput = e => {
    const { value } = e.target;
    setPw({ value: value });
    if (value.length >= 5) {
      setPw({ value: value, isActive: true });
    }
  };

  // PW 숨김 ON/OFF
  const handlePwHide = e => {
    const { classList } = e.target;
    if (classList.contains('fa-eye-slash')) {
      classList.replace('fa-eye-slash', 'fa-eye');
      pwValue.current.type = 'text';
    } else {
      classList.replace('fa-eye', 'fa-eye-slash');
      pwValue.current.type = 'password';
    }
  };

  // 로그인 버튼 활성화
  useEffect(() => {
    id.isActive && pw.isActive
      ? (loginBtn.current.disabled = false)
      : (loginBtn.current.disabled = true);
  }, [id.isActive, pw.isActive]);

  // 서버에 로그인 데이터 전송
  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id.value,
        password: pw.value,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  };
  return (
    <div className="loginSubin">
      <LoginSection
        id={id}
        pw={pw}
        pwValue={pwValue}
        handleIdInput={handleIdInput}
        handlePwInput={handlePwInput}
        handlePwHide={handlePwHide}
        handleLogin={handleLogin}
        loginBtn={loginBtn}
      />
    </div>
  );
}

export default Login;
