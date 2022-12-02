import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Main.scss';

function MainSuin() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_left">
          <img className="westagram_logo" src="/images/suin/logo.png" />
          <p classname="westagram_text">Westagram</p>
        </div>

        <div className="navbar_center">
          <input
            className="search"
            type="search"
            placeholder="검색"
            rel="search"
          />
          <div>
            <image className="search_icon" src="/images/suin/search.png" />
          </div>
        </div>

        <div className="navbar_icons">
          <img src="/images/suin/explore.png" />
          <img src="/images/suin/heart.png" />
          <img src="/images/suin/profile.png" />
        </div>
      </nav>

      <main className="main">
        <section className="feed">
          <article>
            {/* 게시물상단프로필 */}
            <div className="feedHeader">
              <div className="profile">
                <div className="img">
                  <img src="/images/suin/picture.jpg" />
                </div>
                <div className="name">
                  <a href="">cute_tan</a>
                </div>
              </div>
              <div className="more">
                <button>
                  <img src="/images/suin/more.png" />
                </button>
              </div>
            </div>
            {/* //게시물상단프로필 */}

            <div className="commentWrapper">
              {/* 게시글이미지 */}
              <div className="commentIconWrapper">
                <img src="/images/suin/picture.jpg" />
              </div>
              {/* //게시글이미지 */}

              {/* 좋아요, 공유하기 버튼 */}
              <div className="btns">
                <div className="left">
                  <button>
                    <img src="/images/suin/heart.png" />
                  </button>
                  <button>
                    <img src="/images/suin/chat.png" />
                  </button>
                  <button>
                    <img src="/images/suin/share.png" />
                  </button>
                </div>
                <div className="right">
                  <button>
                    <img src="/images/suin/bookmark.png" />
                  </button>
                </div>
              </div>
              {/* //좋아요, 공유하기 버튼 */}

              {/* 좋아요 수  */}
              <div className="commentLike">
                <div className="img">
                  <img src="/images/suin/picture.jpg" />
                </div>
                <p>탄이 외 4명이 좋아합니다.</p>
              </div>
              {/* //좋아요 수  */}

              {/* 게시글 내용 */}
              <p className="contentArea">
                <span>cute_tan</span>
                나는야 행복 댕댕이💕
              </p>
              {/* //게시글 내용 */}

              {/* 댓글 리스트 영역 */}
              <ul className="commentLists">
                <li>
                  <div className="content">
                    <p className="name">닉네임닉네임01</p>
                    <p className="con">콘텐츠 내용 내용 내용</p>
                  </div>
                  <div className="heart">
                    <button>
                      <img src="/images/suin/heart.png" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p className="name">닉네임닉네임02</p>
                    <p className="con">콘텐츠 내용 내용 내용</p>
                  </div>
                  <div className="heart">
                    <button>
                      <img src="/images/suin/heart.png" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p className="name">닉네임닉네임03</p>
                    <p className="con">콘텐츠 내용 내용 내용</p>
                  </div>
                  <div className="heart">
                    <button>
                      <img src="/images/suin/heart.png" />
                    </button>
                  </div>
                </li>
              </ul>
              {/* //댓글 리스트 영역 */}

              <p className="time">54분 전</p>
            </div>

            {/* 댓글 입력창 */}
            <div className="comment">
              <div className="inputComment">
                <input type="text" placeholder="댓글달기..." />
                <button>게시</button>
              </div>
            </div>
            {/* //댓글 입력창 */}
          </article>
        </section>

        <div className="aside">
          <aside className="main_right">
            <div className="aside_1">
              <img
                className="profile_img"
                src="/images/suin/picture.jpg"
                alt="프로필사진"
              />
              <div className="aiside_profile">
                <p className="profile_id">cute_tan</p>
                <p className="profile_info">나는야 귀여운 댕댕</p>
              </div>
            </div>

            {/* 스토리영역 */}
            <div className="aside_2">
              <div className="aside_2_top">
                <p className="aside_top_1">스토리</p>
                <p className="aside_top_2">모두 보기</p>
              </div>
              <div className="aside2_content">
                <ul>
                  <li>
                    <div className="aside_1">
                      <img
                        className="story_img"
                        src="/images/suin/picture.jpg
  "
                        alt="프로필사진"
                      />
                      <div className="aiside_profile">
                        <p className="profile_id">cute_tan</p>
                        <p className="profile_info">나는야 귀여운 댕댕</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="aside_1">
                      <img
                        className="story_img"
                        src="/images/suin/picture.jpg
  "
                        alt="프로필사진"
                      />
                      <div className="aiside_profile">
                        <p className="profile_id">cute_tan</p>
                        <p className="profile_info">나는야 귀여운 댕댕</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="aside_1">
                      <img
                        className="story_img"
                        src="/images/suin/picture.jpg
  "
                        alt="프로필사진"
                      />
                      <div className="aiside_profile">
                        <p className="profile_id">cute_tan</p>
                        <p className="profile_info">나는야 귀여운 댕댕</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* //스토리영역 */}

            {/* 추천영역 */}
            <div className="aside_2">
              <div className="aside_2_top">
                <p className="aside_top_1">회원님을 위한 추천</p>
                <p className="aside_top_2">모두 보기</p>
              </div>
              <div className="aside2_content">
                <ul>
                  <li>
                    <div className="aside_1">
                      <img
                        className="story_img"
                        src="/images/suin/picture.jpg
  "
                        alt="프로필사진"
                      />
                      <div className="aiside_profile">
                        <p className="profile_id">cute_tan</p>
                        <p className="profile_info">suin님 외 100명이...</p>
                      </div>
                    </div>
                    <button className="follow">팔로우</button>
                  </li>
                  <li>
                    <div class="aside_1">
                      <img
                        class="story_img"
                        src="/images/suin/picture.jpg
  "
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
                        src="/images/suin/picture.jpg
  "
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
        </div>
      </main>
    </>
  );
}

export default MainSuin;
