import React, { useContext, useEffect, useState } from 'react'
import Post from '../Post'
import { TwitterContext } from '../../context/TwitterContext'

// const tweets = [
//   {
//     displayName: 'Rakshit',
//     userName: 'dafdsf332323afdddsdsd',
//     avatar:
//       'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
//     text: 'gm',
//     isProfileImageNft: false,
//     timestamp: '2021-02-14T12:00:00.000Z',
//   },
//   {
//     displayName: 'Rakshit',
//     userName: 'dafdsf332323afdddsdsd',
//     avatar:
//       'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
//     text: 'gm',
//     isProfileImageNft: false,
//     timestamp: '2021-09-14T12:00:00.000Z',
//   },
//   {
//     displayName: 'Rakshit',
//     userName: 'dafdsf332323afdddsdsd',
//     avatar:
//       'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
//     text: 'gm',
//     isProfileImageNft: false,
//     timestamp: '2021-04-14T12:00:00.000Z',
//   },
//   {
//     displayName: 'Rakshit',
//     userName: 'dafdsf332323afdddsdsd',
//     avatar:
//       'https://lh3.googleusercontent.com/ogw/ADea4I4RWYu34DBMProuf-PeKrqY9C7vhPKFiWMKBKXgxw=s64-c-mo',
//     text: 'gm',
//     isProfileImageNft: false,
//     timestamp: '2022-01-14T12:00:00.000Z',
//   },
// ]

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

function ProfileTweets() {
  const { currentUser } = useContext(TwitterContext)
  const [tweets, setTweets] = useState([
    {
      timestamp: '',
      tweet: '',
    },
  ])

  const [author, setAuthor] = useState({
    name: '',
    profileImage: '',
    walletAddress: '',
    isProfileImageNft: undefined,
  })

  useEffect(() => {
    if (!currentUser) return
    console.log('currentUser', currentUser)
    setTweets(currentUser?.tweets)
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    })
  }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            author.name === 'Unnamed'
              ? `${author.walletAddress.slice(
                  0,
                  4
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={author.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={author.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
