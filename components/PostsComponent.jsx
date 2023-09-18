import Video from "@/components/media/Video";
import Picture from "@/components/media/Picture";
import YouTubeVideo from "@/components/media/YouTubeVideo";

const MediaType = {
    VID: "vid",
    PICTURE: "picture",
    YTVID: "ytvid",
};

const SinglePostComponent = ({ post, isLastPost }) => {
    return (
        <>
            <div className="last:my-5 mt-5">
                <p className="text-lg text-red-500 dark:text-red-300">
                    {post.title}
                </p>
                <time className="text-sm font-normal italic text-gray-400 dark:text-gray-500">
                    {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                        post.timestamp
                    )}{" "}
                    {post.timestamp.getDate()}, {post.timestamp.getFullYear()}
                </time>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-2">
                    {post.body}
                </p>
                {post.type === MediaType.VID && <Video link={post.url} />}
                {post.type === MediaType.PICTURE && <Picture link={post.url} />}
                {post.type === MediaType.YTVID && (
                    <YouTubeVideo link={post.url} />
                )}
                {!isLastPost && (
                    <hr className="w-48 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                )}
            </div>
        </>
    );
};

const YearComponent = ({ year, posts }) => {
    return (
        <div
            id={year}
            className="border mb-10 lg:mb-20 p-4 lg:p-8 bg-white border-gray-200 rounded-lg drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700"
        >
            <p className="text-2xl underline underline-offset-8 decoration-red-500 dark:decoration-red-400">
                {year}
            </p>
            {Object.entries(posts).map(([type, postsOfType], idx) => (
                <div key={idx}>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4">
                        {type === MediaType.VID
                            ? "Videos"
                            : type === MediaType.PICTURE
                            ? "Pictures"
                            : "YouTube Videos"}
                    </p>
                    {postsOfType.map((post, idx) => (
                        <SinglePostComponent
                            key={post.timestamp}
                            post={post}
                            isLastPost={idx === postsOfType.length - 1}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default function PostsComponent({ postData }) {
    return (
        <div className="relative grow flex flex-col px-6 lg:px-2">
            {Object.entries(postData)
                .reverse()
                .map(([year, posts]) => (
                    <YearComponent key={year} year={year} posts={posts} />
                ))}
        </div>
    );
}
