// import React from 'react';
// import './Main.scss';

function MainSuin() {
  return (
    <>
      <nav id="navbar">
        <div class="navbar_left">
          <div class="westagram_logo">
            <img src="../image/logo.png" />
          </div>
          <div class="westagram_text">Westagram</div>
        </div>

        <div class="navbar_center">
          <input class="search" type="search" placeholder="검색" rel="search" />
          <div>
            <image class="search_icon" src="../image/search.png" />
          </div>
        </div>

        <div class="navbar_icons">
          <img src="../image/explore.png" />
          <img src="../image/heart.png" />
          <img src="../image/profile.png" />
        </div>
      </nav>

      <main class="main">
        <section class="feed">
          <article>
            {/* 게시물상단프로필 */}
            <div class="feedHeader">
              <div class="profile">
                <div class="img">
                  <img src="../image/feed_profile.jpg" />
                </div>
                <div class="name">
                  <a href="">asdasd</a>
                </div>
              </div>
              <div class="more">
                <button>
                  <img src="../image/heart.png" />
                </button>
              </div>
            </div>
            {/* //게시물상단프로필 */}

            <div class="commentWrapper">
              {/* 게시글이미지 */}
              <div class="commentIconWrapper">
                <img src="../image/feed_profile.jpg" />
              </div>
              {/* //게시글이미지 */}

              {/* 좋아요, 공유하기 버튼 */}
              <div class="btns">
                <div class="left">
                  <button>
                    <img src="../image/heart.png" />
                  </button>
                  <button>
                    <img src="../image/heart.png" />
                  </button>
                  <button>
                    <img src="../image/heart.png" />
                  </button>
                </div>
                <div class="right">
                  <button>
                    <img src="../image/heart.png" />
                  </button>
                </div>
              </div>
              {/* //좋아요, 공유하기 버튼 */}

              {/* 좋아요 수  */}
              <div class="commentLike">
                <div class="img">
                  <img src="../image/feed_profile.jpg" />
                </div>
                <p>탄이 외 4명이 좋아합니다.</p>
              </div>
              {/* //좋아요 수  */}

              {/* 게시글 내용 */}
              <p class="contentArea">
                <span>asdasd_asdasd</span>
                asdasdasd
              </p>
              {/* //게시글 내용 */}

              {/* 댓글 리스트 영역 */}
              <ul class="commentLists">
                <li>
                  <div class="content">
                    <p class="name">닉네임닉네임01</p>
                    <p class="con">콘텐츠 내용 내용 내용</p>
                  </div>
                  <div class="heart">
                    <button>
                      <img src="../image/heart.png" />
                    </button>
                  </div>
                </li>
                <li>
                  <div class="content">
                    <p class="name">닉네임닉네임02</p>
                    <p class="con">콘텐츠 내용 내용 내용</p>
                  </div>
                  <div class="heart">
                    <button>
                      <img src="../image/heart.png" />
                    </button>
                  </div>
                </li>
                <li>
                  <div class="content">
                    <p class="name">닉네임닉네임03</p>
                    <p class="con">콘텐츠 내용 내용 내용</p>
                  </div>
                  <div class="heart">
                    <button>
                      <img src="../image/heart.png" />
                    </button>
                  </div>
                </li>
              </ul>
              {/* //댓글 리스트 영역 */}

              <p class="time">54분 전</p>
            </div>

            {/* 댓글 입력창 */}
            <div class="inputComment">
              <input type="text" placeholder="댓글달기..." />
              <button>게시</button>
            </div>
            {/* //댓글 입력창 */}
          </article>
        </section>

        <aside class="main_right">
          <div class="aside_1">
            <img
              class="profile_img"
              src="../image/feed_profile.jpg"
              alt="프로필사진"
            />
            <div class="aiside_profile">
              <p class="profile_id">cute_tan</p>
              <p class="profile_info">나는야 귀여운 댕댕</p>
            </div>
          </div>

          {/* 스토리영역 */}
          <div class="aside_2">
            <div class="aside_2_top">
              <p class="aside_top_1">스토리</p>
              <p class="aside_top_2">모두 보기</p>
            </div>
            <div class="aside2_content">
              <ul>
                <li>
                  <div class="aside_1">
                    <img
                      class="story_img"
                      src="../image/feed_profile.jpg"
                      alt="프로필사진"
                    />
                    <div class="aiside_profile">
                      <p class="profile_id">cute_tan</p>
                      <p class="profile_info">나는야 귀여운 댕댕</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="aside_1">
                    <img
                      class="story_img"
                      src="../image/feed_profile.jpg"
                      alt="프로필사진"
                    />
                    <div class="aiside_profile">
                      <p class="profile_id">cute_tan</p>
                      <p class="profile_info">나는야 귀여운 댕댕</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="aside_1">
                    <img
                      class="story_img"
                      src="../image/feed_profile.jpg"
                      alt="프로필사진"
                    />
                    <div class="aiside_profile">
                      <p class="profile_id">cute_tan</p>
                      <p class="profile_info">나는야 귀여운 댕댕</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* //스토리영역 */}

          {/* 추천영역 */}
          <div class="aside_2">
            <div class="aside_2_top">
              <p class="aside_top_1">회원님을 위한 추천</p>
              <p class="aside_top_2">모두 보기</p>
            </div>
            <div class="aside2_content">
              <ul>
                <li>
                  <div class="aside_1">
                    <img
                      class="story_img"
                      src="../image/feed_profile.jpg"
                      alt="프로필사진"
                    />
                    <div class="aiside_profile">
                      <p class="profile_id">cute_tan</p>
                      <p class="profile_info">suin님 외 100명이...</p>
                    </div>
                  </div>
                  <button class="follow">팔로우</button>
                </li>
                <li>
                  <div class="aside_1">
                    <img
                      class="story_img"
                      src="../image/feed_profile.jpg"
                      alt="프로필사진"
                    />
                    <div class="aiside_profile">
                      <p class="profile_id">cute_tan</p>
                      <p class="profile_info">suin님 외 100명이...</p>
                    </div>
                  </div>
                  <button class="follow">팔로우</button>
                </li>
                <li>
                  <div class="aside_1">
                    <img
                      class="story_img"
                      src="../image/feed_profile.jpg"
                      alt="프로필사진"
                    />
                    <div class="aiside_profile">
                      <p class="profile_id">cute_tan</p>
                      <p class="profile_info">suin님 외 100명이...</p>
                    </div>
                  </div>
                  <button class="follow">팔로우</button>
                </li>
              </ul>
            </div>
          </div>
          {/* //추천영역 */}
        </aside>
      </main>
    </>
  );
}

// export default MainSuin;
