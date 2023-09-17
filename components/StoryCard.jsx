import Image from "next/image";
import Link from "next/link";

export default function StoryCard({ data }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700 m-4">
            <Link href={data.href} className="block relative w-full h-48">
                <Image
                    src={data.teampic}
                    alt="Team Pic"
                    fill = {true}
                    className="rounded-t-lg"
                    unoptimized={true}
                />
            </Link>

            <div className="p-5">
                <Link href={data.href}>
                    <div className="mb-2 flow-root">
                        <div className="float-left ">
                            <img
                                className="inline w-10 h-10 p-1 rounded-full ring-2 ring-blue-400 dark:ring-blue-500"
                                src={data.profilepic}
                                alt="Bordered avatar"
                            />
                            <span className="ml-3 font-normal text-blue-600 dark:text-blue-200">
                                {data.name}
                            </span>
                        </div>

                        <span className="block float-right bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 w-fit rounded-full dark:bg-blue-900 dark:text-blue-300">
                            {data.date}
                        </span>
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.brief_content}
                </p>
                <Link
                    href={data.href}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}
