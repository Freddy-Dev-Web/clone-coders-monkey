import Image from "next/image";

interface AvatarProps {
    size?: "small" | "medium" | "large";
    src: string;
    alt: string
}

export const Avatar = ({size = "medium", src, alt}: AvatarProps) => {

    let sizeStyle: string;

    switch (size) {
        case "small":
            sizeStyle = "w-[24px] h-[24px]";
            break;
        case "medium": //Default
            sizeStyle = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeStyle = "w-[50px] h-[50px]";
            break;
    }

    return (
        <div className={`relative bg-gray-400 rounded-full ${sizeStyle}`}>
            <Image 
            src={src}
            alt={alt} 
            fill
            className="rounded-full object-cover object-center"
            />
        </div>
    )
}