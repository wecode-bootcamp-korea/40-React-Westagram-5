import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../components/Nav';
import Comment from './Comment';
// import Aside from './Aside';
import { FOOTER_INFO_LIST } from './FooterData';
import '../sunyoung/Main.scss';

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

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(['여기 진짜 강추!']);

  // 댓글창에 내용 입력
  const inputChangeHandler = e => {
    setComment(e.target.value);
  };

  //게시 버튼 클릭햇을 때 댓글 추가 기능
  const buttonClickHandler = () => {
    setCommentList(prevState => {
      return [...prevState, comment];
    });
    setComment('');
  };

  // enter 눌렀을 때 댓글 입력 기능 구현
  const keyDownHandler = e => {
    if (e.keyCode === 13) {
      setCommentList(prevState => {
        return [...prevState, comment];
      });
      setComment('');
    }
  };

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
          {feedInfoList.map(feedInfo => {
            return (
              <article className="feed">
                {/* feed-top */}
                <div className="feedTopContainer">
                  <div className="profileImgAndUserId">
                    <div className="profileImage">
                      <img alt="profile" src={feedInfo.profileImage} />
                    </div>
                    <span>{feedInfo.userid}</span>
                  </div>
                  <div id="icon_more">
                    <img alt="more" src="./images/sunyoung/more.png" />
                  </div>
                </div>
                {/* ----------- */}
                <div className="feedImgWrap">
                  <img alt="feed_img" src={feedInfo.feedImage} />
                </div>

                {/* feed-summary */}
                <div className="feedBottomContainer">
                  <div className="feed__summaryIcons">
                    <div className="feed__iconLeft">
                      <img alt="heart" src="./images/sunyoung/heart.png" />
                      <img alt="chat" src="./images/sunyoung/chat.png" />
                      <img alt="send" src="./images/sunyoung/send.png" />
                    </div>
                    <div className="feed__iconRight">
                      <img
                        alt="bookmark"
                        src="./images/sunyoung/bookmark.png"
                      />
                    </div>
                  </div>
                  <div className="feed__whoLikesFeed">
                    <div className="profileImage">
                      <img
                        alt="profile_image"
                        src="./images/sunyoung/profile_img.png"
                      />
                    </div>
                    <span className="userId">{feedInfo.whoLikesFeed.name}</span>
                    <span>{feedInfo.whoLikesFeed.theCountOfLike}</span>
                  </div>

                  <div className="feed__description">
                    &nbsp;
                    <div className="feed_text">
                      <span className="userId">
                        {feedInfo.feedDescription.name}
                      </span>
                      <span className="feed_content">
                        &nbsp; {feedInfo.feedDescription.content}
                        <br /> <br />
                        <br /> <br />
                      </span>
                    </div>
                  </div>

                  {/* comment 컴포넌트 */}
                  {commentList.map((d, index) => (
                    <Comment index={index} d={d} key={index} />
                  ))}
                </div>

                <div className="feedCommentInput">
                  <input
                    onKeyDown={keyDownHandler}
                    onChange={inputChangeHandler}
                    value={comment}
                    id="input_comment"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <div onClick={buttonClickHandler} id="button_comment">
                    게시
                  </div>
                </div>
              </article>
            );
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
