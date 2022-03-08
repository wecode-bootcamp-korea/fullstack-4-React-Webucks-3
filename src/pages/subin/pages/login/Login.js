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
    const { value, classList } = e.target;
    setId({ value: value });
    if (value.includes('@')) {
      setId({ value: value, isActive: true });
      classList.replace('inActive', 'active');
    } else {
      classList.replace('active', 'inActive');
    }
  };

  // PW 값 변경 및 활성화
  const handlePwInput = e => {
    const { value, classList } = e.target;
    setPw({ value: value });
    if (value.length >= 5) {
      setPw({ value: value, isActive: true });
      classList.replace('inActive', 'active');
    } else {
      classList.replace('active', 'inActive');
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
    if (id.isActive && pw.isActive) {
      loginBtn.current.disabled = false;
      loginBtn.current.style.background = '#61ADED';
    } else {
      loginBtn.current.disabled = true;
      loginBtn.current.style.background = '#D5E7F8';
    }
  }, [id.isActive, pw.isActive]);

  return (
    <div className="loginSubin">
      <LoginSection
        id={id}
        pw={pw}
        pwValue={pwValue}
        handleIdInput={handleIdInput}
        handlePwInput={handlePwInput}
        handlePwHide={handlePwHide}
        loginBtn={loginBtn}
      />
    </div>
  );
}

export default Login;
