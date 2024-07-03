import {FunctionComponent} from "react";
import clsx from "clsx";

interface TypographyProps {
    variant?: "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "lead"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption1"
        | "caption2"
        | "caption3"
        | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "div" | "p" | "span";
    theme?: "light" | "dark" | "black" | "gray" | "white";
    weight?: "regular" | "medium" | "semibold";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
                               variant = "h3",
                               component: Component = "div",
                               theme = "black",
                               weight = "regular",
                               className,
                               children
                           }: TypographyProps) => {
    let variantStyles: string = ""
    switch (variant) {
        case "display":
            variantStyles = "text-red-500"
            break;
        case "h1":
            variantStyles = "text-blue-500"
            break;
    }
    return <Component
        className={clsx(variantStyles, weight === "medium" && "font-medium", className)}>{children}</Component>;
}