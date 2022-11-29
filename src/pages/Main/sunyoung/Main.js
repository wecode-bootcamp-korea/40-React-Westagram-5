import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Nav from '../../../components/nav';
import '../sunyoung/Main.scss';
import FOOTER_INFO_LIST from './FooterData';

// import { info } from 'sass';

function MainSunyoung() {
  const navigate = useNavigate();

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

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

      <button
        className="goToLoginButton"
        onClick={() => navigate('/login-sunyoung')}
      >
        Go to Login
      </button>

      <main className="mainBody">
        <article className="feed">
          {/* feed-top */}
          <div className="feedTopContainer">
            <div className="profileImgAndUserId">
              <div className="profileImage">
                <img alt="profile" src="./images/sunyoung/profile_img.png" />
              </div>
              <span>y_xunyoung</span>
            </div>
            <div id="icon_more">
              <img alt="more" src="./images/sunyoung/more.png" />
            </div>
          </div>
          {/* ----------- */}
          <div className="feedImgWrap">
            <img alt="feed" src="./images/sunyoung/feed.jpg" />
          </div>

          {/* feed-summary */}
          <div className="feedSummary">
            <div className="summaryIcons">
              <div className="iconLeft">
                <img alt="heart" src="./images/sunyoung/heart.png" />
                <img alt="chat" src="./images/sunyoung/chat.png" />
                <img alt="send" src="./images/sunyoung/send.png" />
              </div>
              <div className="iconRight">
                <img alt="bookmark" src="./images/sunyoung/bookmark.png" />
              </div>
            </div>
            <div className="feedLike">
              <div className="profileImage">
                <img
                  alt="profile_image"
                  src="./images/sunyoung/profile_img.png"
                />
              </div>
              <span className="userId">y_xunyoung</span>
              <span>님 외 59명이 좋아합니다.</span>
            </div>
            <div className="feedDescription">
              <div>
                <span className="userId">y_xunyoung</span>
                &nbsp;
                <span>
                  빵지순례 필수코스 12가지로 구성된 마들렌 전시회를 볼 수 있는
                  도식화는 요즘
                </span>
              </div>

              <div>상수동에서 항상 웨이팅 가득한 핫한 카페입니다.</div>
              <div>
                음료도 상큼한 에이드부터 크림라떼 등 종류도 다양하니 다들 도식화
                뿌시러가주세요.
              </div>
              <br />
              <div>
                &#128205;도식화 상수 - 서울 마포구 와우산로17길 19-9 1층
              </div>
              <div>
                <span>✅ 인스타아이디</span>
                <span className="textWithOtherColor">@dosikhwa_seoul</span>
              </div>
              <div>✅ 매일 12:00-22:00 / 21:00 라스트오더</div>
              <div>✅ 상수역 1번출구에서 350미터</div>
              <br />
              <span className="textWithOtherColor">
                #상수카페 #디저트카페 #마들렌맛집 #저장각
              </span>
              <br />
              <br />
            </div>
            <div className="feedComment">
              <div className="comment">
                <div className="commentUpper">
                  <div className="commentContent">
                    <span id="userNickname" className="userId">
                      suuyani
                    </span>
                    <span id="feedComment" className="text">
                      여기 저도 진짜 강추해요!
                    </span>
                  </div>
                  <div className="comment_like_icon">
                    <img
                      id="deleteBtn"
                      alt="delete_button"
                      src="./images/sunyoung/trash.png"
                    />
                    <img
                      id="empty_heart"
                      alt="like_button"
                      src="./images/sunyoung/empty_heart.png"
                    />
                  </div>
                </div>
                <div className="commentBottom">42분전</div>
              </div>
            </div>
            {commentList.map((d, index) => {
              return (
                <div key={index} className="comment">
                  <div className="commentUpper">
                    <div className="commentContent">
                      <span id="userNickname" className="userId">
                        suuyani
                      </span>
                      <span id="feedComment" className="text">
                        {d}
                      </span>
                    </div>
                    <div className="comment_like_icon">
                      <img
                        id="deleteBtn"
                        alt="delete_button"
                        src="./images/sunyoung/trash.png"
                      />
                      <img
                        id="empty_heart"
                        alt="like_button"
                        src="./images/sunyoung/empty_heart.png"
                      />
                    </div>
                  </div>
                  <div className="commentBottom">42분전</div>
                </div>
              );
            })}
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
            </div>
            <br />
            <address>© 2022 WESTAGRAM FROM META</address>
          </footer>
        </aside>
      </main>
    </>
  );
}

export default MainSunyoung;
