import React from "react";
import Link from "next/link";
import data from "@/assets/images";
import EventRow from "@/components/EventRow";

const GalleryPage = () => {
    console.log("GALLERY PAGE");
    return (
        <div>
            <div>
                <p className="text-center text-xl md:text-3xl lg:text-4xl">
                    Gallery
                </p>
            </div>
            {Object.keys(data).map((title) => {
                return (
                    <div key={title}>
                        <div className="flex justify-between">
                            <p className="text-left text-sm md:text-lg lg:text-xlxl p-2">
                                {title}
                            </p>
                            <p className="text-right text-sm md:text-lg lg:text-xlxl p-2">
                                <Link
                                    href={{
                                        pathname: "/gallery/[slug]",
                                        query: { slug: title },
                                    }}
                                    className="underline text-blue-600 hover:text-blue-800"
                                >
                                    More
                                </Link>
                            </p>
                        </div>
                        <EventRow data={data[title]} />
                    </div>
                );
            })}
        </div>
    );
};

export default GalleryPage;
