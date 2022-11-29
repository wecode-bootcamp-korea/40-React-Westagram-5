import React from 'react';

const Comment = ({ index, d }) => {
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
        <div className="button__likeAndDelete">
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
      <div className="commentBottom">1분전</div>
    </div>
  );
};

export default Comment;
