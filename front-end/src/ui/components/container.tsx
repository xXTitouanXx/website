import clsx from "clsx";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({children, className}: ContainerProps) => {
    return (
        <div
            className={clsx("w-full max-w-7xl mx-auto lg:px-10", className)}
        >
            {children}
        </div>
    )
}