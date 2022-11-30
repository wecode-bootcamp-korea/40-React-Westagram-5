import React, { useState } from 'react';
import Comment from './Comment';

const Feed = ({ feedInfo }) => {
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
            <img alt="bookmark" src="./images/sunyoung/bookmark.png" />
          </div>
        </div>
        <div className="feed__whoLikesFeed">
          <div className="profileImage">
            <img alt="profile_image" src="./images/sunyoung/profile_img.png" />
          </div>
          <span className="userId">{feedInfo.whoLikesFeed.name}</span>
          <span>{feedInfo.whoLikesFeed.theCountOfLike}</span>
        </div>

        <div className="feed__description">
          &nbsp;
          <div className="feed_text">
            <span className="userId">{feedInfo.feedDescription.name}</span>
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
};

export default Feed;
