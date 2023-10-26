import { useState } from 'react'
import './Video.css'
import { BiSolidLike, BiLike } from 'react-icons/bi'

export default function Video() {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className="video">
      <img 
        className="video-thumbnail" 
        src="https://external-preview.redd.it/theprimeagen-on-typescript-v0-4YJWaQmG4CvdtUe_-Qq7m-HahYu_UJNUXYwV1IPa8F0.jpg?width=640&crop=smart&auto=webp&s=a9990110daef8d4cd9cdc0d908d1d51dfe321f24"
      />
      <div className="video-info">
        <img 
          className="profile-picture"
          src="https://pbs.twimg.com/profile_images/1614986714795180033/yOQly3os_400x400.jpg"
        />
        <div className="video-text">
          <h1 className="video-title">Maintainability And Readability | Prime Reacts</h1>
          <h3 className="profile-name">ThePrimeagen</h3>
        </div>
        {
         !isLiked ?
         <BiSolidLike className="button-like" onClick={() => setIsLiked(!isLiked)}/>
         :
         <BiLike className="button-like" onClick={() => setIsLiked(!isLiked)}/>
        }
      </div>
    </div>
  );
}