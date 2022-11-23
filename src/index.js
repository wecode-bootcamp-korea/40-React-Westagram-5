import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

//공통적으로 적용되는 스타일의 경우 여기에 한번만 import해주면 된다 (common.scss , reset.scsss)
//❗️variables.scss 는 scss안에서만 사용될 변수, 믹스인들을 모아놓은 파일이므로 import 하지 않음.
import './styles/common.scss';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
