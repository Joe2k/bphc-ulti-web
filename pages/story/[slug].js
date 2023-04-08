import { useRouter } from "next/router";
import Image from "next/image";

export default function Story() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="dark:bg-gray-900">
      <div className="relative w-full aspect-video">
        <Image
          src="https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwdGVhbXxlbnwwfHwwfHw%3D"
          alt="Team Pic"
          width={0}
          height={0}
          fill={true}
          unoptimized={true}
        />
      </div>
      <div className="mx-8 my-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          The one where we beat Goa :)
        </h1>
        <div className="mt-2 flow-root">
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

        <div className="prose dark:prose-invert mt-8 prose-h1:text-2xl">
          <h1>Heading 1</h1>
          <p>Hello hows it going</p>
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D"
            alt="Bordered avatar"
          />
        </div>
      </div>
    </div>
  );
}
