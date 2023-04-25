const YouTubeVideo = ({ link }) => {
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                className="border border-4 mt-3 rounded-lg border-red-400 "
                width="560"
                height="315"
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;
