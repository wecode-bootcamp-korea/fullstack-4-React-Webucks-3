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

// 정훈's 컴포넌트

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
        <Route path="/login-junghoon" element={<LoginJunghoon />} />
        <Route path="/list-junghoon" element={<ListJunghoon />} />
        <Route path="/list-junghoon/:id" element={<DetailJunghoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
