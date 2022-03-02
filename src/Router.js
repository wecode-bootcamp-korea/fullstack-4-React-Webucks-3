import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 수빈's 컴포넌트
import LoginSubin from "./pages/subin/pages/login/Login";
import DetailSubin from "./pages/subin/pages/detail/Detail";
import ListSubin from "./pages/subin/pages/list/List";

// 하은's 컴포넌트
import LoginHaeun from "./pages/haeun/pages/Login/Login";
import DetailHaeun from "./pages/haeun/pages/Detail/Detail";
import ListHaeun from "./pages/haeun/pages/List/List";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-subin" element={<LoginSubin />} />
        <Route path="/list-subin" element={<ListSubin />} />
        <Route path="/detail-subin" element={<DetailSubin />} />
        <Route path="/login-haeun" element={<LoginHaeun />} />
        <Route path="/list-haeun" element={<ListHaeun />} />
        <Route path="/detail-haeun" element={<DetailHaeun />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;