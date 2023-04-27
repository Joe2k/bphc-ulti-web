import React, { useEffect, useState } from "react";
import Image from "next/image";

function EventRow(props) {
    const [imageBar, setImageBar] = useState(3);

    console.log("works");

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    function handleResize() {
        if (window.innerWidth < 768) {
            setImageBar(1);
            // console.log("1");
        } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
            setImageBar(2);
            // console.log("2");
        } else {
            setImageBar(3);
            // console.log("3");
        }
    }
    let images = props.data.slice(0, imageBar);
    return (
        <div className="gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => {
                return (
                    <div
                        key={image.key}
                        className="w-auto aspect-auto overflow-hidden p-2"
                    >
                        <div
                            className="relative h-0"
                            style={{
                                paddingBottom: `${
                                    (image.height / image.width) * 100
                                }%`,
                            }}
                        >
                            <Image
                                className="rounded-lg"
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default EventRow;
