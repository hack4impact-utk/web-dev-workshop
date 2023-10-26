import { useState } from 'react'
import './Video.css'
import { BiSolidLike, BiLike } from 'react-icons/bi'

interface videoProps {
  title: string;
  profileName: string;
  thumbnailSrc: string;
  profilePicSrc: string;
}

export default function Video(props: videoProps) {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className="video">
      <img 
        className="video-thumbnail" 
        src={props.thumbnailSrc}
      />
      <div className="video-info">
        <img 
          className="profile-picture"
          src={props.profilePicSrc}
        />
        <div className="video-text">
          <h1 className="video-title">{props.title}</h1>
          <h3 className="profile-name">{props.profileName}</h3>
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