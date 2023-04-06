import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {SunIcon, MoonIcon} from "@heroicons/react/24/solid"

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            <nav className="sticky flex flex-wrap p-6 items-center justify-between">
                <div className="flex items-center flex-shrink-0 text-white">
                    <h1 className="text-semibold text-center text-4xl text-red-400">
                        <Link href="/">BPHC Ultimate</Link>
                    </h1>
                    <svg className="ml-4 dark:fill-white" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1224 1584" width="32" height="41">
	                    <title>Stag Logo</title>
	                    <g id="Layer 1">
	                    	<g id="&lt;Group&gt;">
	                    		<path id="&lt;Path&gt;" d="m208.5 248.2c6.5 15-3.5 24.8-7.6 35.3-30.7 80.3-44.1 163.6-45.3 249.2-0.7 50.8 15.7 94.9 51.5 133.5 16.1-21.3 6.3-50.1 30.4-81.8-4.6 156.3 99.9 199.7 213.4 238.9 11.3-39.8 0.4-78.7 16-116.9q16.7 52.3 33.3 104.6c18.4 57.5 104.7 85.1 158.9 60.2 49.5-22.7 69.1-59 79.6-107 4.3-19.7 12.2-38.5 21.3-66.5 15.5 45.9 0.8 85.2 12.7 125.3 113.2-38.4 218.1-81.2 213.7-235 26 26.6 13.4 56.3 30.4 77.8 35.7-37 52.1-80.8 51.6-131.2-0.7-85.6-14.1-169-44.6-249.3-4.1-10.9-13.1-20.7-9.3-36.4 17.6 8.2 22.9 24.8 29.7 39 50.7 105.9 69.1 218.9 70.8 335.3 0.5 38.3-17 67.7-48 89-76 52.4-151.2 105.8-222.8 164.2-8.4 6.8-18.1 12.6-28.1 16.7-16.3 6.7-33.9 8.6-32.7 34.5 0.6 13.4-17.3 18.8-28.6 25.7-20.6 12.6-29.8 27.8-24.8 54.2 8.5 44.5 1.4 84.6-33.8 120-23.5 23.6-35.6 56.5-32 93.3 3.3 34.8-7.7 43.2-49.6 43.7-45.4 0.5-57.5-7.7-55.2-42.4 2.8-43-13.4-77.3-42.5-107.3-29.3-30.3-30.1-68.2-23-105.7 4.9-25.6-1.9-42.3-23.3-55-16.5-9.8-35.5-17.8-31.9-43.1 1.2-8-7-8.3-12.2-11-101.9-54.9-185.9-135.3-281.9-198.7-26.9-17.8-36.3-48.2-35.6-80.1 2.4-111.2 18.6-219.8 65.6-322 8.4-18.2 14.9-38.3 33.9-51z"/>
	                    	</g>
	                    </g>
                    </svg>
                </div>
                <div className="flex items-center text-base">
                    <div>
                        <Link className="pr-5 decoration-2 hover:underline hover:underline-offset-8" href="/story">
                            stories
                        </Link>
                    </div>
                    <div>
                        <Link className="pr-5 decoration-2 hover:underline hover:underline-offset-8" href="/jersey-wall">
                            jersies
                        </Link>
                    </div>
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className=" h-8 w-8 rounded p-1.5"
                        onClick={() =>
                            setTheme(
                                resolvedTheme === "dark" ? "light" : "dark"
                            )
                        }
                    >
                            {mounted && theme === "dark" ? (
                                <SunIcon/>
                            ) : (
                                <MoonIcon/>
                            )}
                    </button>
                </div>
            </nav>
        </div>
    );
}
