import React from 'react';
import StoryProfile from './StoryProfile';

const Story = () => {
  const profileList = [1, 2, 3, 4, 5];
  //   const arr = new Array(7).fill(1);
  return (
    <div className="mainRightStory">
      <div className="mainRightStoryTitle">
        <span>스토리</span>
        <span>모두보기</span>
      </div>
      {profileList.map((_, index) => {
        return <StoryProfile key={index} />;
      })}
    </div>
  );
};

export default Story;
