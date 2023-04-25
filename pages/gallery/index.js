import React from "react";
import Link from "next/link";
import data from "@/assets/images";
import EventRow from "@/components/eventRow";

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
                        <div>
                            <p className="text-left text-sm md:text-lg lg:text-xlxl p-2">
                                {title}
                            </p>
                            <Link
                                href={{
                                    pathname: "/gallery/[slug]",
                                    query: { slug: title },
                                }}
                            >
                                More
                            </Link>
                        </div>
                        <EventRow data={data[title]} />
                    </div>
                );
            })}
        </div>
    );
};

export default GalleryPage;
