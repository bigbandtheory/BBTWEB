import React, { Component } from 'react';
import { PlayButton , Progress} from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const Track = (props) => {
  const { trackTitle, artistName, trackUrl, tag , coverImage, currentTime, duration} = props;
  return (
    <div>
       <div className="coverDiv">
           <img src={coverImage} alt="Cover" />
       </div>
       <PlayButton streamUrl={trackUrl} />
       <span><b> {artistName} </b> - {trackTitle} </span>
       <span className="label">{tag}</span>
        <Progress
           className="mt1 mb1 rounded"
           innerClassName="rounded-left"
           value={(currentTime / duration) * 100 || 0}
        />
    </div>
  );
};

export default withCustomAudio(Track);