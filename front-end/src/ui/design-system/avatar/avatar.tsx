import React from "react";
import Image from "next/image";
import clsx from "clsx";
import {Spinner} from "@/ui/design-system/spinner/spinner";

interface AvatarProps {
    size?: "small" | "medium" | "large" | "extra-large";
    src: string;
    alt: string;
    isLoading?: boolean
}

export const Avatar = ({size = "medium", src, alt, isLoading}: AvatarProps) => {
    let sizeStyles: string = "";
    switch (size) {
        case "small":
            sizeStyles = "w-[24px] h-[24px]";
            break
        case "medium":
            sizeStyles = "w-[34px] h-[34px]";
            break
        case "large":
            sizeStyles = "w-[50px] h-[50px]";
            break
        case "extra-large":
            sizeStyles = "w-[130px] h-[130px]";
            break
    }
    return (
        <div className={clsx(sizeStyles,
            isLoading && "flex items-center justify-center",
            "bg-gray-400 rounded-full relative overflow-hidden")}>
            <div className={clsx(
                isLoading ? "opacity-40" : "opacity-0",
                "absolute z-10 w-full h-full bg-white animate"
            )}/>
            <Image
                fill
                src={src ? src : "/assets/svg/avatar.svg"}
                alt={alt}
                className={clsx(
                    isLoading && "blur-[2px]",
                    "object-cover object-left-top rounded-full animate"
                )}
            />
            {isLoading && <Spinner className="relative z-20"/>}
        </div>
    );
}