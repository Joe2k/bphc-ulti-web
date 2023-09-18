import { useRouter } from "next/router";
import Image from "next/image";
import { stories } from "./data";

export default function Story() {
    const router = useRouter();
    const { slug } = router.query;
    const story = stories.find((story) => story.slug.endsWith(slug));

    return (
        <>
            <div className="relative w-full aspect-video">
                <Image
                    src={story.teamPic}
                    alt="Team pic"
                    fill={true}
                    unoptimized={true}
                />
            </div>
            <div className="mx-8 md:mx-0 my-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {story.title}
                </h1>
                <div className="mt-2 flow-root">
                    <div className="float-left ">
                        <img
                            className="inline w-10 h-10 p-1 rounded-full ring-2 ring-blue-400 dark:ring-blue-500"
                            src={story.profilePic}
                            alt="Bordered avatar"
                        />
                        <span className="ml-3 font-normal text-blue-600 dark:text-blue-200">
                            {story.name}
                        </span>
                    </div>

                    <span className="block float-right bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 w-fit rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {story.date}
                    </span>
                </div>

                <div className="prose dark:prose-invert mt-8 prose-h1:text-2xl">
                    <p>{story.body}</p>
                </div>
            </div>
        </>
    );
}
