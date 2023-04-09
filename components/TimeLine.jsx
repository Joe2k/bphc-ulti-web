const SingleTimelineComponent = () => {
    return <>
            <div className="flex flex-row items-center">
            <div className="dark:bg-white bg-black h-3 w-3 rounded-full"></div>
            <div className="ml-3"> 2021 </div>
            </div>
            <div className="h-20 w-0.5 ml-1 dark:bg-white bg-black my-2 last-of-type:hidden"></div>
        </> 
}
const AnotherTimeLine = ({year}) => {
    return <li className="mb-10 ml-6 h-20 last:h-0 last:mb-0">            
        <span className="mt-1.5 absolute flex items-center justify-center w-3 h-3 bg-red-500 rounded-full -left-1.5 ring-8 ring-slate-200 dark:ring-gray-900 dark:bg-red-400">
        </span>
        <h3>{year}</h3>
    </li>           
    
}
export default function Timeline(){
    return <div className="flex px-6 lg:px-0 ml-4 flex-col w-100 ">
        <ol className="relative border-l border-gray-400 dark:border-gray-700">
        <AnotherTimeLine year="2023"/>
        <AnotherTimeLine year="2022"/>
        <AnotherTimeLine year="2021"/>

        </ol>
        {/* <SingleTimelineComponent/>
        <SingleTimelineComponent/>
        <SingleTimelineComponent/> */}
        

    </div>
}