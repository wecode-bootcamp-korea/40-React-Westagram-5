import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../components/Nav';
// import Aside from './Aside';
import { FOOTER_INFO_LIST } from './FooterData';
import '../sunyoung/Main.scss';
import Feed from './Feed';

function MainSunyoung() {
  const navigate = useNavigate();

  const [feedInfoList, setFeedInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/feedInfoList.json')
      .then(response => response.json())
      .then(result => {
        setFeedInfoList(result);
      });
  }, []);

  return (
    <>
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
      <div className="wrappMainWithFooter">
        {/* <button
        className="goToLoginButton"
        onClick={() => navigate('/login-sunyoung')}
      >
        Login
      </button> */}

        <main className="mainBody">
          {feedInfoList.map((feedInfo, id) => {
            return <Feed key={id} feedInfo={feedInfo} />;
          })}
        </main>

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

          <div className="mainRightStory">
            <div className="mainRightStoryTitle">
              <span>스토리</span>
              <span>모두보기</span>
            </div>
            {/* <!-- profile --> */}
            <div className="profile ring">
              <div className="profileImage">
                <img alt="profile" src="./images/sunyoung/profile_img.png" />
              </div>
              <div className="profileText">
                <div className="userId">y_xunyoung</div>
                <div className="info">16분전</div>
              </div>
            </div>
            {/* <!------------->
            <!-- profile --> */}
            <div className="profile ring">
              <div className="profileImage">
                <img alt="profile" src="./images/sunyoung/profile_img.png" />
              </div>
              <div className="profileText">
                <div className="userId">y_xunyoung</div>
                <div className="info">16분전</div>
              </div>
            </div>
            {/* <!------------->
            <!-- profile --> */}
            <div className="profile ring">
              <div className="profileImage">
                <img alt="profile" src="./images/sunyoung/profile_img.png" />
              </div>
              <div className="profileText">
                <div className="userId">y_xunyoung</div>
                <div className="info">16분전</div>
              </div>
            </div>
            {/* <!------------->
            <!-- profile --> */}
            <div className="profile ring">
              <div className="profileImage">
                <img alt="profile" src="./images/sunyoung/profile_img.png" />
              </div>
              <div className="profileText">
                <div className="userId">y_xunyoung</div>
                <div>16분전</div>
              </div>
            </div>
            {/* <!-------------> */}
          </div>
          <div className="recommandForUsers">
            <div className="mainRightStoryTitle">
              <span>회원님을 위한 추천</span>
              <span>모두보기</span>
            </div>
            {/* <!-- profile --> */}
            <div className="profileRecommand">
              <div className="profile">
                <div className="profileImage">
                  <img alt="profile" src="./images/sunyoung/profile_img.png" />
                </div>
                <div className="profileText">
                  <div className="userId">y_xunyoung</div>
                  <div className="info">jxdami님 외2명...</div>
                </div>
              </div>
              <div className="followText">팔로우</div>
            </div>
            {/* <!-------------> */}
            {/* <!-- profile --> */}
            <div className="profileRecommand">
              <div className="profile">
                <div className="profileImage">
                  <img alt="profile" src="./images/sunyoung/profile_img.png" />
                </div>
                <div className="profileText">
                  <div className="userId">y_xunyoung</div>
                  <div className="info">jxdami님 외2명...</div>
                </div>
              </div>
              <div className="followText">팔로우</div>
            </div>
            {/* <!-------------> */}
            {/* <!-- profile --> */}
            <div className="profileRecommand">
              <div className="profile">
                <div className="profileImage">
                  <img alt="profile" src="./images/sunyoung/profile_img.png" />
                </div>
                <div className="profileText">
                  <div className="userId">y_xunyoung</div>
                  <div className="info">jxdami님 외2명...</div>
                </div>
              </div>
              <div className="followText">팔로우</div>
            </div>
            {/* <!-------------> */}
          </div>

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
      </div>
    </>
  );
}

export default MainSunyoung;
