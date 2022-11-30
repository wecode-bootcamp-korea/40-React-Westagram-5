import React, { useState, useEffect } from 'react';

// Mock data 를 이용하여 여러개의 feed 구현

const Feed = () => {
  const [feedInfoList, setFeedInfoList] = useState([]);
  console.log(feedInfoList);

  useEffect(() => {
    fetch('/data/feedInfoList.json')
      .then(response => response.json())
      .then(result => {
        setFeedInfoList(result);
      });
  }, []);

  return (
    <div>
      Feed
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
                  <img alt="bookmark" src="./images/sunyoung/bookmark.png" />
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
                <div>
                  <span className="userId">
                    {feedInfo.feedDescription.name}
                  </span>
                  &nbsp;
                  <div className="feedDescription">
                    {feedInfo.feedDescription.content}
                  </div>
                </div>

                {/* comment 컴포넌트 */}
                {commentList.map((d, index) => (
                  <Comment index={index} d={d} key={index} />
                ))}
              </div>
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
    </div>
  );
};

export default Feed;
