import React from 'react';
import { FOOTER_INFO_LIST } from '../FooterData';
import Recommand from './Recommand';
import Story from './Story';

const Aside = () => {
  return (
    <aside className="mainRight">
      <div className="mainRightTop">
        <div className="profile">
          <div className="profileImageSmallSize">
            <img alt="profile" src="./images/sunyoung/profile_img.png" />
          </div>
          <div className="profileText">
            <div className="userId">y_xunyoung</div>
            <div className="info">sunyoung</div>
          </div>
        </div>
      </div>

      <Story />
      <Recommand />

      {/* footer 컴포넌트 */}
      <footer>
        <div className="footerLinkList">
          <ul>
            {FOOTER_INFO_LIST.map(info => {
              return (
                <li key={info.id}>
                  <a href={info.link}>{info.text}</a>
                </li>
              );
            })}
          </ul>
          <br />
          <address>© 2022 WESTAGRAM FROM META</address>
        </div>
      </footer>
    </aside>
  );
};

export default Aside;
