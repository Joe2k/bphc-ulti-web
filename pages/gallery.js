import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/assets/images";
import Event from "@/components/event";

const GalleryPage = () => {
    return (
        <div>
            <div>
                <p className="text-center text-sky-400 text-xl md:text-3xl lg:text-6xl">
                    Gallery
                </p>
            </div>
            {images.map((image) => {
                return (
                    <div>
                        <div>
                            <p className="text-left text-sm md:text-lg lg:text-3xl p-2">
                                Event
                            </p>
                        </div>
                        <Event data={image} />
                    </div>
                );
            })}
        </div>
    );
};

export default GalleryPage;
