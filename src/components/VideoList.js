import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelect})=>{
    const renderList = videos.map((video)=>{
        return <VideoItem 
                video={video} 
                onVideoSelect={onVideoSelect} 
                key={video.id.videoId}
                />
    });
    return(
        <div className="list-group">
            {renderList}
        </div>
    )
};

export default VideoList;