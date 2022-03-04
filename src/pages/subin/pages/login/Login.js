import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const btnRef = useRef();
  const pwValue = useRef();
  const [id, setId] = useState({
    value: '',
    isActive: false,
  });
  const [pw, setPw] = useState({
    value: '',
    isActive: false,
  });

  // ID VALUE & ACTIVE FUNCTION
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

  // PW VALUE & ACTIVE FUCNTION
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

  // PW HIDE & SHOW FUNCTION
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

  // BTN ACTIVE HOOK
  useEffect(() => {
    if (id.isActive && pw.isActive) {
      btnRef.current.disabled = false;
      btnRef.current.style.background = '#61ADED';
    } else {
      btnRef.current.disabled = true;
      btnRef.current.style.background = '#D5E7F8';
    }
  }, [id.isActive, pw.isActive]);

  return (
    <div className="loginSubin">
      <section id="loginSection">
        <h2 id="title">WeBucks</h2>

        <div className="inputSection">
          <div className="idWrapper">
            <input
              className="loginInput email inActive"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={handleIdInput}
              value={id.value || ''}
            />
          </div>
          {/* console창에 pw input 은 form 태그에 감싸져야하고 autoComplete 설정을 해줘야한다고 경고창이 뜬다. */}
          <form className="pwWrapper">
            <input
              className="loginInput pw inActive"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
              value={pw.value || ''}
              ref={pwValue}
              autoComplete="off"
            />
            <i className="fa-solid fa-eye-slash eye" onClick={handlePwHide} />
          </form>
          <button
            className="loginBtn"
            ref={btnRef}
            onClick={() => {
              navigate('/list-subin');
            }}
          >
            로그인
          </button>
        </div>

        <Link to="#" className="forgetPw">
          비밀번호를 잊으셨나요?
        </Link>
      </section>
    </div>
  );
}

export default Login;
