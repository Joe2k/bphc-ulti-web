import Image from "next/image";
import Video from "@/components/media/Video";
import Picture from "@/components/media/Picture";
import YouTubeVideo from "@/components/media/YouTubeVideo";

const SinglePostComponent = ({ post, isLastPost }) => {
    return (
        <>
            <div className="last:my-5 mt-5">
                <p className="text-lg text-red-500 dark:text-red-300">
                    {post.desc}
                </p>
                <time className="text-sm font-normal italic text-gray-400 dark:text-gray-500">
                    {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                        post.timestamp
                    )}{" "}
                    {post.timestamp.getDate()}, {post.timestamp.getFullYear()}
                </time>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-2">
                    {post.content}
                </p>
                {post.vid && <Video link={post.vid} />}
                {post.picture && <Picture link={post.picture} />}
                {post.ytvid && <YouTubeVideo link={post.ytvid} />}
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
            {posts.map((post, idx) => (
                <SinglePostComponent
                    key={post.timestamp}
                    post={post}
                    isLastPost={idx === posts.length - 1}
                />
            ))}
        </div>
    );
};

export default function PostsComponent({ postData }) {
    return (
        <div className="relative  grow flex flex-col px-6 lg:px-2">
            {Object.entries(postData)
                .reverse()
                .map(([year, posts]) => (
                    <YearComponent key={year} year={year} posts={posts} />
                ))}
        </div>
    );
}
