import Image from "next/image";

interface LogoProps {
    size?: "very-small" | "small" | "medium" | "large"
}

export const Logo = ({size = "medium"}: LogoProps) => {

    let sizeStyle: number;

    switch (size) {
        case "very-small":
            sizeStyle = 34;
            break;
        case "small":
            sizeStyle = 61;
            break;
        case "medium": //Default
            sizeStyle = 88;
            break;
        case "large":
            sizeStyle = 140;
            break;
    }

    return (
        <div  >
            <Image src="/images/logo.png" alt="logo" width={sizeStyle} height={sizeStyle} className="rounded-full" />
        </div>
    )
}