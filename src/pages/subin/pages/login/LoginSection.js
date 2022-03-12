import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginSection({
  id,
  pw,
  pwValue,
  loginBtn,
  handleIdInput,
  handlePwInput,
  handlePwHide,
}) {
  const navigate = useNavigate();
  return (
    <section className="loginSection">
      <h2 className="title">WeBucks</h2>

      <div className="inputSection">
        <div className="idWrapper">
          <input
            className="loginInput inActive"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={handleIdInput}
            value={id.value}
          />
        </div>
        {/* console창에 pw input 은 form 태그에 감싸져야하고 autoComplete 설정을 해줘야한다고 경고창이 뜬다. */}
        <form className="pwWrapper">
          <input
            className="loginInput inActive"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            value={pw.value}
            ref={pwValue}
            autoComplete="off"
          />
          <i className="fa-solid fa-eye-slash eye" onClick={handlePwHide} />
        </form>
        <button
          className="loginBtn"
          ref={loginBtn}
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
  );
}

export default LoginSection;
