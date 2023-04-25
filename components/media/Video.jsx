const Video = ({ link }) => {
    return (
        <div className="relative aspect-w-16 aspect-h-9">
            <iframe
                className="h-full w-full absolute border border-4 mt-3 rounded-lg border-red-400 "
                allowFullScreen
                src={link}
            />
        </div>
    );
};

export default Video;
