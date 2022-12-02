import React from 'react';
import RecommandProfile from './RecommandProfile';

const Recommand = () => {
  const RecommandList = [1, 2, 3, 4, 5];
  return (
    <div className="recommandForUsers">
      <div className="mainRightStoryTitle">
        <span>회원님을 위한 추천</span>
        <span>모두보기</span>
      </div>
      {RecommandList.map((_, index) => {
        return <RecommandProfile key={index} />;
      })}
    </div>
  );
};

export default Recommand;
