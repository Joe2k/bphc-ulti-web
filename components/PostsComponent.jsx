import Image from "next/image"

const dynamicContentMap = {
    ytvid: (dynamicContent) =>  {
        return<div className="aspect-w-16 aspect-h-9">
            <iframe className="border border-4 mt-3 rounded-lg border-red-400 " width="560" height="315" src={dynamicContent} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div> 
    },
    vid: (dynamicContent) => {
        return <div className="relative aspect-w-16 aspect-h-9">
            <iframe className="h-full w-full absolute border border-4 mt-3 rounded-lg border-red-400 " allowFullScreen src={dynamicContent}/>
        </div>
    },
    picture: (dynamicContent) => {
        return <div className="block relative">
            <Image 
            unoptimized
            height={0}
            width={0}
            className="w-full h-fit border border-4 mt-3 rounded-lg border-red-400"  
            src={dynamicContent} 
            alt="> Insert Happy Faces <" 
            />
        </div>
    },
}

const DynamicDisplay = ({dynamicContentType,dynamicContent}) => {    
    return <div>        
        {
            dynamicContentMap[dynamicContentType](dynamicContent)
        }
    </div>
}

const SinglePostComponent = ({post}) => {
    const dynamicContentType = post.vid ? "vid" : post.ytvid ? "ytvid" : post.picture ? "picture" : null;
    return <>
    <div className="mt-10 mb-10">
        <p className="text-lg">{post.desc}</p>
        <time className="text-sm font-normal italic text-gray-400 dark:text-gray-500">March, 2023</time>
        <p className="font-normal text-gray-400 dark:text-gray-500">{post.content}</p>
        {
            dynamicContentType!=null ? <DynamicDisplay dynamicContentType={dynamicContentType} dynamicContent={post[dynamicContentType]}/> : <></>
        }
    </div>
    </> 
}

const YearComponent = ({year,posts}) => {
    return <div id={year} className="border mb-20 p-8 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <p className="text-2xl underline underline-offset-8 decoration-red-500 dark:decoration-red-400">{year}</p>
    {
        posts.map((post)=>{
            return <SinglePostComponent post={post}/>
        })
    }
    </div>
}

export default function PostsComponent({postData}){

    return <div className="relative  grow flex flex-col px-6 lg:px-2">
        {
            Object.entries(postData).map(([year,posts])=>{
               return <YearComponent year={year} posts={posts}/>
            })
        }
    </div>
}