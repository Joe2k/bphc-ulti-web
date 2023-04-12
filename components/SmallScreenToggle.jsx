import { useState } from "react";
import Timeline from "./TimeLine";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SmallScreenToggle({ years }) {
    const [toggled, setToggled] = useState(false);
    return (
        <div className="block md:hidden lg:hidden">
            <div
                onClick={() => {
                    setToggled(!toggled);
                }}
                className="flex items-center justify-center fixed rounded-full bottom-5 right-5 h-14 w-14 drop-shadow-lg bg-slate-700 dark:bg-white text-slate-200 dark:text-gray-900"
            >
                {toggled ? (
                    <button>
                        <ChevronDownIcon className="w-6 h-6 stroke-2 text-slate-200 dark:text-gray-900" />
                    </button>
                ) : (
                    <button>
                        <ChevronUpIcon className="w-6 h-6 stroke-2 text-slate-200 dark:text-gray-900" />
                    </button>
                )}
            </div>

            {toggled ? (
                <div className="overflow-scroll py-5 flex justify-center fixed rounded-lg bottom-24 right-5 h-1/3 w-28 drop-shadow-2xl border border-gray-400 dark:border-gray-600  bg-gray-200 dark:bg-gray-900">
                    <div className="h-fit">
                        <Timeline years={years} />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
