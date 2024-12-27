import React from 'react';
import clsx from 'clsx';

interface Props {
    
    // Défini le style de la typographie
    variant?:
        | "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "subtitle1"
        | "subtitle2"
        | "body1"
        | "body2"
        | "caption"
        | "overline";

        // Défini la div qui contiendra le texte
        component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
        theme?: "black" | "gray" | "white" | "primary" | "secondary";
        weight?: "light" | "regular" | "medium" | "bold";
        className?: string;
        children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    component : Component = "div",
    theme = "black",
    weight = "regular",
    className,
    children,
}: Props) => {

    let variantStyles:  string = "", colorStyles: string = ""; // On initialise la variable variantStyles

    switch (variant) {  // On switch sur le variant
        case "display":
            variantStyles = "text-8xl font-bold text-red-500";
            break;
        case "h1":
            variantStyles = "text-7xl font-bold text-green-500";
            break;
        case "h2":
            variantStyles = "text-5xl font-bold text-blue-500";
            break;
        case "h3":
            variantStyles = "text-4xl font-bold text-yellow-500";
            break; 
        case "h4":
            variantStyles = "text-3xl font-bold text-purple-500";
            break;
        case "h5":
            variantStyles = "text-1xl font-bold text-indigo-500";
            break;
        case "subtitle1":
            variantStyles = "text-sm font-bold text-gray-500";
            break;
        case "subtitle2":
            variantStyles = "text-xs font-bold text-gray-500";
            break;
        case "body1":
            variantStyles = "text-base font-normal text-gray-500";
            break;
        case "body2":
            variantStyles = "text-sm font-normal text-gray-500";
            break;
        case "caption":
            variantStyles = "text-xs font-normal text-gray-500";
            break;
        case "overline":
            variantStyles = "text-xs font-bold text-gray-500";
            break;


    }

    switch (theme) {
        case "black":
            colorStyles = " text-black";
            break;
        case "gray":
            colorStyles = " text-gray-500";
            break;
        case "white":
            colorStyles = " text-white";
            break;
        case "primary":
            colorStyles = " text-primary";
            break;
        case "secondary":
            colorStyles = " text-secondary";
            break;
    }


    return  <Component className={clsx(
                        variantStyles,
                        colorStyles,
                        weight === "medium" && "font-medium",
                        className
                    )}
            >
                            
                {children}
            </Component>
};