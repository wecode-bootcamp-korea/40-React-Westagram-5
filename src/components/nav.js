import React from 'react';
import './Nav.scss';

function ComponentNav() {
  return (
    <nav className="navContainer">
      <div className="navLeft">
        <img
          className="instagram_logo_img"
          alt="instagram_logo"
          src="./images/sunyoung/instagram_icon.png"
        />
        <h1 className="instagram_logo_text">westagram</h1>
      </div>

      <div className="navCenter">
        <input className="inputSearch" type="search" placeholder="검색" />
      </div>
      <div className="navRight">
        <img
          alt="explore"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        />
        <img
          alt="heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
        <img
          alt="my_page"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        />
      </div>
    </nav>
  );
}

export default ComponentNav;
