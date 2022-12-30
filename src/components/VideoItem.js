import "./VideoItem.css"

const VideoItem = ({video, onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(video)} className="myVideo-item list-group-item">
            <img 
                src={video.snippet.thumbnails.medium.url} 
                className="img-thumbnail mr-2" 
                alt={video.snippet.title}
            />
            {video.snippet.title}
        </div>
    )
};

export default VideoItem;