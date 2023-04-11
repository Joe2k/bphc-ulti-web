import { useState } from "react";
import Timeline from "./TimeLine";

export default function SmallScreenToggle(){
    const [toggled,setToggled] = useState(false);
    return <div className="block md:hidden lg:hidden"><div onClick={()=>{setToggled(!toggled)}} className="flex items-center justify-center fixed rounded-full bottom-5 right-5 h-10 w-10 drop-shadow-lg bg-slate-700 dark:bg-slate-600 text-slate-200 dark:text-gray-900 ">
        {
            toggled 
            ? <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg></button>
          
            : <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg></button>
          
        }
        
    </div>
    
    {
        toggled
        ? <div className="overflow-auto pt-20 h-10 flex items-center justify-center fixed rounded-lg bottom-16 right-5 h-64 w-28 drop-shadow-2xl border border-gray-400 dark:border-gray-600  bg-gray-200 dark:bg-gray-900">
            <div className="mb-10 h-fit">
                <Timeline years={[2023,2022,2021]}/>
            </div>
        </div>
        : <></>
    }
    </div>
}