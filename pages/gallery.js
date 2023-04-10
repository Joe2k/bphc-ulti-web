import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/assets/images";
import Event from "@/components/event";

const GalleryPage = () => {
    return (
        <div>
            <div>
                <p className="text-center text-sky-400 text-xl md:text-3xl lg:text-6xl">
                    Gallery
                </p>
            </div>
            {Object.keys(data).map((title) => {
                return (
                    <div key={title}>
                        <div>
                            <p className="text-left text-sm md:text-lg lg:text-3xl p-2">
                                {title}
                            </p>
                        </div>
                        <Event data={data[title]} />
                    </div>
                );
            })}
        </div>
    );
};

export default GalleryPage;
