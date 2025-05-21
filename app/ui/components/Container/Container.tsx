import clsx from "clsx";

interface ContainerProps {
    children: React.ReactNode;
    className?: string
}

export const Container = ({children, className}: ContainerProps) => {
    return (
        <div 
        className={clsx(className, "w-full max-w-7xl px-5 lg:px-10")}
        >
            {children}
        </div>
    )
}