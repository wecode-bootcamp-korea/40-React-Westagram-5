import React from 'react';

const RecommandProfile = () => {
  return (
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
  );
};

export default RecommandProfile;
