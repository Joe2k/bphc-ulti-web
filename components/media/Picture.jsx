import Image from "next/image";

const Picture = ({ link }) => {
    return (
        <div className="block relative">
            <Image
                unoptimized
                height={0}
                width={0}
                className="w-full h-fit border border-4 mt-3 rounded-lg border-red-400"
                src={link}
                alt="> Insert Happy Faces <"
            />
        </div>
    );
};

export default Picture;
