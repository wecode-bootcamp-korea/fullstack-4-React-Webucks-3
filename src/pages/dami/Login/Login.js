import { Link } from 'react-router-dom';
import './Login.scss';

function LoginDami() {
  //선언할 때 필요한 재료들을 만들기

  //선언
  return (
    <div class="loginDami">
      <view class="back">
        <section className="loginArea">
          <div className="weBucksSection">
            <h1 className="weBucksText"> weBucks </h1>
            <section className="IdSection">
              <input
                id="userId"
                type="text"
                className="idInput"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                id="password"
                type="password"
                className="pwInput"
                placeholder="비밀번호"
              />
              <button className="loginBtn" type="button">
                <Link to="/List" />
                로그인{' '}
              </button>
              <footer className="pwForget">
                <p> 비밀번호를 잊으셨나요?</p>
              </footer>
            </section>
          </div>
        </section>
      </view>
    </div>
  );
}

export default LoginDami;
