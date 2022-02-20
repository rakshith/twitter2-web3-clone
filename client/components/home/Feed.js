import React from 'react'

import { useContext, useEffect } from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Rakshit',
    userName: 'dafdsf332323afdddsdsd',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2021-02-14T12:00:00.000Z',
  },
  {
    displayName: 'Rakshit',
    userName: 'dafdsf332323afdddsdsd',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2021-09-14T12:00:00.000Z',
  },
  {
    displayName: 'Rakshit',
    userName: 'dafdsf332323afdddsdsd',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2021-04-14T12:00:00.000Z',
  },
  {
    displayName: 'Rakshit',
    userName: 'dafdsf332323afdddsdsd',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-01-14T12:00:00.000Z',
  },
]

function Feed() {
  return (
    <div className={`${style.wrapper} no-scrollbar`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <div key={index}>
          <Post
            displayName={tweet.displayName}
            userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
              -4
            )}`}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        </div>
      ))}
    </div>
  )
}

export default Feed
