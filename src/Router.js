import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 하은's 컴포넌트
import LoginHaeun from './pages/haeun/Login/Login';
import DetailHaeun from './pages/haeun/Detail/Detail';
import ListHaeun from './pages/haeun/List/List';

// 수빈's 컴포넌트
import LoginSubin from './pages/subin/pages/login/Login';
import DetailSubin from './pages/subin/pages/detail/Detail';
import ListSubin from './pages/subin/pages/list/List';

//다미's 컴포넌트
import LoginDami from './pages/dami/Login/Login';
import DetailDami from './pages/dami/Detail/Detail';
import ListDami from './pages/dami/List/List';
import TopnavDami from './pages/dami/Components/Nav/Topnav';
import Test from './pages/dami/Test/Test';
import FooterDami from './pages/dami/Footer/Footer';
import CoffeeCardDami from './pages/dami/List/CoffeeCard/CoffeeCard';

//정훈's 컴포넌트
import LoginJunghoon from './pages/junghoon/Login/Login';
import DetailJunghoon from './pages/junghoon/Detail/Detail';
import ListJunghoon from './pages/junghoon/List/List';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-haeun" element={<LoginHaeun />} />
        <Route path="/list-haeun" element={<ListHaeun />} />
        <Route path="/detail-haeun" element={<DetailHaeun />} />

        <Route path="/login-subin" element={<LoginSubin />} />
        <Route path="/list-subin" element={<ListSubin />} />
        <Route path="/detail-subin" element={<DetailSubin />} />

        {/* <Route path="/Logon" element={<LoginJunghoon />} />
        <Route path="/List" element={<ListJunghoon />} />
        <Route path="/List/Detail" element={<DetailJunghoon />} /> */}

        <Route path="/login-dami" element={<LoginDami />} />
        <Route path="/coffee" element={<ListDami />} />
        <Route path="/coffee/:id" element={<DetailDami />} />
        <Route path="/test/:id" element={<Test />} />

        {/* <Route path="/detail-dami" element={<DetailDami />} /> */}
        <Route path="/nav-dami" element={<TopnavDami />} />
        <Route path="/test" element={<Test />} />
        <Route path="/footer-dami" element={<FooterDami />} />
        <Route path="/coffeecard-dami" element={<CoffeeCardDami />} />
        <Route path="/list-dami" element={<ListDami />} />
        <Route path="/detail-dami" element={<DetailDami />} />
        <Route path="/list-subin/:id" element={<DetailSubin />} />
        <Route path="/login-junghoon" element={<LoginJunghoon />} />
        <Route path="/List-junghoon" element={<ListJunghoon />} />
        <Route path="/Detail-junghoon" element={<DetailJunghoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
