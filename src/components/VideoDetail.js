const VideoDetail = ({video})=>{
    if(!video){
        return <div>Veuillez rechercher une vidéo</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>
            <div className="embed-responsive embed-responsive-4by3">
                <iframe className ="embed-responsive-item" src={videoSrc} title="video player"></iframe>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5>{video.snippet.title}</h5>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
};

export default VideoDetail;