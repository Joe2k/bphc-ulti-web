import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className="px-6">
            <Head>
                <title>BPHC Ultimate</title>
                <meta name="description" content="Home of BPHC Ultimate Team" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-4xl">BPHC Ultimate</h1>
            <div className="flex justify-center flex-wrap">
                <Link
                    href="/story"
                    className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Stories
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Have a read of the historic stories through time.
                    </p>
                </Link>

                <Link
                    href="/jersey-wall"
                    className="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Jersey Wall
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Have a look of our teams from different seasons.
                    </p>
                </Link>
            </div>
        </div>
    );
}
