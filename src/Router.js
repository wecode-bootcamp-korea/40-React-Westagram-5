//router 컴포넌트를 만들고 이를 export 해줄것

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//새로 만든 컴포넌트 import

import LoginSuin from './pages/Login/suin/Login';
import LoginHyunwuk from './pages/Login/hyunwuk/Login';
import LoginSunyoung from './pages/Login/sunyoung/Login';

import ComponentNav from './components/Nav';

import MainSuin from './pages/Main/suin/Main';
import MainHyunwuk from './pages/Main/hyunwuk/Main';
import MainSunyoung from './pages/Main/sunyoung/Main';
import Signup from './pages/Login/sunyoung/Signup';

//route 하기
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<ComponentNav />} />
        <Route path="/login-suin" element={<LoginSuin />} />
        <Route path="/login-hyunwuk" element={<LoginHyunwuk />} />
        <Route path="/login-sunyoung" element={<LoginSunyoung />} />
        <Route path="/main-suin" element={<MainSuin />} />
        <Route path="/main-hyunwuk" element={<MainHyunwuk />} />
        <Route path="/main-sunyoung" element={<MainSunyoung />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
