"use client";

import clsx from "clsx";
import React from "react";
import { Spinner } from "../spinner/Spinner";
import { LinkType, LinkTypes } from "@//lib/Link-Type";
import Link from "next/link";
// import { IconProps } from "../../../types/IconProps"

interface ButtonProps {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
    icon?: React.ReactNode;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
    baseUrl?: string;
    linkType?: LinkType;
    action?: () => void;
}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    className,
    baseUrl,
    linkType = "interne",
    action = () => {}
}: ButtonProps) => {
    let variantStyle = "";
    let sizeStyle = "";

    switch (variant) {
        case "accent":
            variantStyle = "bg-primary hover:bg-primary-400 text-white rounded-default cursor-pointer";
            break;
        case "secondary":
            variantStyle = "bg-primary-200 hover:bg-primary-400 text-primary rounded-default cursor-pointer";
            break;
        case "outline":
            variantStyle = "bg-white hover:bg-gray-100 border border-gray-500 text-gray-900 rounded-default cursor-pointer";
            break;
        case "disabled":
            variantStyle = "bg-gray-300 text-gray-600 rounded-default cursor-not-allowed";
            break;
        case "icon":
            switch (iconTheme) {
                case "accent":
                    variantStyle = "bg-primary hover:bg-primary-400 text-white rounded-full cursor-pointer";
                    break;
                case "secondary":
                    variantStyle = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full cursor-pointer";
                    break;
                case "gray":
                    variantStyle = "bg-gray-700 hover:bg-gray-600 text-white rounded-full cursor-pointer";
                    break;
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyle = "text-sm px-5 py-3";
            break;
        case "medium":
            sizeStyle = "text-base px-6 py-3.5";
            break;
        case "large":
            sizeStyle = "text-lg px-5 py-3";
            break;
    }

    const handleClick = () => {
        if(action) {
            action()
        }
    }

    const buttonContent = (
        <>
        {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {variant === "accent" || variant === "icon" ? <Spinner size="small" variant="white"/> : <Spinner size="small" />}
                </div>
            )}

            <div className={clsx(isLoading && "invisible")}>
            {variant === "icon" ? (
                icon
            ) : (
                <div className={clsx(icon && "flex items-center gap-1")}>
                    {icon && iconPosition === "left" && <span>{icon}</span>}
                    <span>{children}</span>
                    {icon && iconPosition === "right" && <span>{icon}</span>}
                </div>
            )}
            </div>
        </>
    )

    const contentElement = (
        <>
        <button
            type="button"
            className={clsx(
                "relative flex items-center justify-center gap-2 animate",
                variantStyle,
                sizeStyle,
                className,
                isLoading && "cursor-wait",
            )}
            onClick={handleClick}
            disabled={disabled}
        >
            {buttonContent}
        </button>
        </>
    )

    if(baseUrl) {
        if(linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {contentElement}
                </a>
            )
        } else {
            return <Link href={baseUrl}>{contentElement}</Link>
        }
    }

    return contentElement
};
export default Button;