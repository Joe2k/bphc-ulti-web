const YearComponent = ({year}) => {
    return <li className="mb-10 ml-6 h-20 last:h-0 last:mb-0">            
        <span className="mt-1.5 absolute flex items-center justify-center w-3 h-3 bg-red-500 rounded-full -left-1.5 ring-8 ring-slate-200 dark:ring-gray-900 dark:bg-red-400">
        </span>
        <button><h3 className="hover:text-red-400" onClick={()=>{scrollToYear(year)}}>{year}</h3></button>
    </li>           
    
}
const scrollToYear = (year) => {
    const element = document.getElementById(year);
    const offset = 100;
    const scrollPosition = element.getBoundingClientRect().top - offset;

    if (element) {
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        })
    }
}
export default function Timeline({years}){
    return <div className="sticky z-50 flex px-6 lg:px-0 hidden mr-20 ml-4 flex-col md:block lg:block">
        <ol className="relative border-l border-gray-400 dark:border-gray-700">
            {
                years.map(year =>{
                    return <YearComponent key={year} year={year} />
                })
            }
        </ol>
    </div>
}