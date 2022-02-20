import React from 'react'
import Post from '../Post'

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

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

function ProfileTweets() {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName="Rakshit"
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
