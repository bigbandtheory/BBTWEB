import React from 'react';

const VideoGrid = ({videos = []}) => {
    return (
        <div className="gallery-wrapper">{
            videos && videos.map(({ url: videoUrl, artist }) => {
            return (
                <div className="gallery-item"  key={artist}>
                    <video
                        src={videoUrl}
                        controls
                        style={{border: 'none', overflow: 'hidden'}}>
                    </video>
                </div>
            )})}</div>
    );
};

VideoGrid.defaultProps = {
    videos: [],
};

export default React.memo(VideoGrid);