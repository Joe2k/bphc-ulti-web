import React from "react";
import Image from "next/image";

function EventRow(props) {
    const images = props.data;
    return (
        <div className="gap-0 rows-1">
            {images.map((image, index) => {
                return (
                    <div key={image.key} className="h-auto p-2">
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
