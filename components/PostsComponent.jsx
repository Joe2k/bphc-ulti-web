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

const SinglePostComponent = (props) => {
    return <>
    <div className="mt-10 mb-10">
        <p className="text-lg">{props.desc}</p>
        <time className="text-sm font-normal text-gray-400 dark:text-gray-500">March, 2023</time>
        <DynamicDisplay {...props}/>
    </div>
    </>
}

const YearComponent = (props) => {
    return <div id={props.year} className="border mb-20 p-8 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <p className="text-2xl underline underline-offset-8 decoration-red-500 dark:decoration-red-400">{props.year}</p>
    <SinglePostComponent desc="BPHC vs Skywalkers @ NCUC 2022" dynamicContentType="ytvid" dynamicContent="https://www.youtube.com/embed/yD1juX7c_T8"/>
    <SinglePostComponent desc="We flyin high sometimes!" dynamicContentType="picture" dynamicContent="https://res.cloudinary.com/deejstqqy/image/upload/v1680948188/cld-sample-3.jpg"/>            
    <SinglePostComponent desc="When Life was sweet :)" dynamicContentType="picture" dynamicContent="https://res.cloudinary.com/deejstqqy/image/upload/v1680948177/samples/cloudinary-group.jpg"/>
    </div>
}

export default function PostsComponent(){
    return <div className="relative  grow flex flex-col px-6 lg:px-2">
        <div id="2023" className="border mb-20 p-8 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="text-2xl underline underline-offset-8 decoration-red-500 dark:decoration-red-400">2023</p>
            <SinglePostComponent desc="NCS Sectionals at BITS Hyd!" dynamicContentType="ytvid" dynamicContent="https://www.youtube.com/embed/cmuwg8XMyVg?modestbranding=1"/>
            <SinglePostComponent desc="Candids at @Blr, Lalbagh" dynamicContentType="picture" dynamicContent="https://res.cloudinary.com/deejstqqy/image/upload/v1681122499/LALBAGH_zjt03j.jpg"/>            
            <SinglePostComponent desc="Practice sessions in Blr for our 3rd NCUC!" dynamicContentType="vid" dynamicContent="https://res.cloudinary.com/deejstqqy/video/upload/v1681122561/NCUC_2022_Prep_Video_lbwlt8.mp4"/>
        </div>
        <YearComponent year="2022"/>
        <YearComponent year="2021"/>
    </div>
}