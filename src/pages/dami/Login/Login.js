import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginDami() {
  //선언할 때 필요한 재료들을 만들기

  //id와 pw의 초기값을 빈칸으로 두고, 변경사항의 상태를 확인하도록 함
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const loginSuccess = () => {
    navigate('/coffee');
  };

  //함수를 input박스와 연결하여 변경사항이 생기면 최신으로 업데이트된 값을 반영하도록 함
  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };

  //활성화를 결정하기 위한 함수
  const isPassedLogin = id.includes('@') && pw.length > 5;

  //회원가입, 로그인을 위한 fetch함수
  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  // const isPassedLogin = () => {
  //   if (id.includes('@') && pw.length > 5) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  //선언
  return (
    <div class="loginDami">
      <section class="back">
        <section className="loginArea">
          <div className="weBucksSection">
            <h1 className="weBucksText"> weBucks </h1>
            <section className="IdSection">
              <input
                onChange={handleIdInput}
                onKeyup={isPassedLogin}
                id="userId"
                type="text"
                className="idInput"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={handlePwInput}
                onKeyup={isPassedLogin}
                id="password"
                type="password"
                className="pwInput"
                placeholder="비밀번호"
              />
              <button
                disabled={!isPassedLogin}
                className={isPassedLogin ? 'abledBtn' : 'disabledBtn'}
                type="submit"
                onClick={handleLogin}
              >
                <Link to="/coffee" />
                로그인
              </button>
              <footer className="pwForget">
                <p> 비밀번호를 잊으셨나요?</p>
              </footer>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default LoginDami;
