import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <>
      <Head>
        <title>BPHC Ultimate</title>
        <meta name="description" content="Home of BPHC Ultimate Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={roboto.className}>
        <div className="m-8">
          <h1 className="text-center text-4xl text-red-400">BPHC Ultimate</h1>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Story Page
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Jersey Wall
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
