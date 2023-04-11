import Image from "next/image"

const DisplayVideo = ({link}) => {
    return <div className="relative aspect-w-16 aspect-h-9">
        <iframe className="h-full w-full absolute border border-4 mt-3 rounded-lg border-red-400 " allowFullScreen src={link}/>
    </div>
}
const DisplayYTvid = ({link}) => {
    return <div className="aspect-w-16 aspect-h-9">
        <iframe className="border border-4 mt-3 rounded-lg border-red-400 " width="560" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
}

const DisplayPicture = ({link}) => {
    return <div className="block relative">
        <Image 
        unoptimized
        height={0}
        width={0}
        className="w-full h-fit border border-4 mt-3 rounded-lg border-red-400"  
        src={link} 
        alt="> Insert Happy Faces <" 
        />
    </div>
}
const SinglePostComponent = ({post}) => {
    return <>
    <div className="mt-10 mb-10">
        <p className="text-lg">{post.desc}</p>
        <time className="text-sm font-normal italic text-gray-400 dark:text-gray-500">{new Intl.DateTimeFormat('en-US', {month: 'long'}).format(post.timestamp)} {post.timestamp.getDate()}, {post.timestamp.getFullYear()}</time>
        <p className="font-normal text-gray-400 dark:text-gray-500">{post.content}</p>
        {
            post.vid && <DisplayVideo link={post.vid}/>
        }
        {
            post.picture && <DisplayPicture link={post.picture}/>
        }
        {
            post.ytvid && <DisplayYTvid link={post.ytvid}/>
        }
    </div>
    </> 
}

const YearComponent = ({year,posts}) => {
    return <div id={year} className="border mb-20 p-8 bg-white border-gray-200 rounded-lg drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <p className="text-2xl underline underline-offset-8 decoration-red-500 dark:decoration-red-400">{year}</p>
    {
        posts.map((post)=>{
            return <SinglePostComponent key={post.timestamp} post={post}/>
        })
    }
    </div>
}

export default function PostsComponent({postData}){

    return <div className="relative  grow flex flex-col px-6 lg:px-2">
        {
            Object.entries(postData).map(([year,posts])=>{
               return <YearComponent key={year} year={year} posts={posts}/>
            })
        }
    </div>
}