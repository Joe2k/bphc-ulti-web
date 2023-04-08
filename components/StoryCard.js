import Image from "next/image";

export default function StoryCard() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
      <a href="#" className="block relative w-full h-48">
        <Image
          src="https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwdGVhbXxlbnwwfHwwfHw%3D"
          alt="Team Pic"
          width={0}
          height={0}
          fill={true}
          className="rounded-t-lg"
          unoptimized={true}
        />
      </a>

      <div className="p-5">
        <a href="#">
          <div className="mb-2 flow-root">
            <div className="float-left ">
              <img
                className="inline w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-blue-500"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D"
                alt="Bordered avatar"
              />
              <span className="ml-3 font-normal text-gray-700 dark:text-blue-200">
                Ramkumar V.
              </span>
            </div>

            <span className="block float-right bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 w-fit rounded-full dark:bg-blue-900 dark:text-blue-300">
              2022/23
            </span>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The one where we beat Goa :)
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest achievements, fun and some nerve cracking moments
          of last year!
        </p>
        <a
          href="#"
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
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
