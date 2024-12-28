import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";


interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
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
}: Props) => {

    let variantStyles: string = "",
        sizeStyles: string = "",
        icoSize: number = 0;

    switch (variant) { 
        case "accent": // Default
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary": // Secondary
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline": // Outline
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
        case "disabled": // Disabled
            variantStyles = "bg-gray-400 border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "ico": // Icon
            if (iconTheme === "accent") {
                variantStyles =
                    "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles =
                    "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles =
                    "bg-gray-700 hover:bg-gray-400/50 border border-gray-500 text-gwhite rounded-full";
            }
            break;
    }


    switch (size) {
        case "small":
            sizeStyles = `text-sm ${
                variant === "ico" ?
                "flex items-center justify-center w-[30px] h-[30px]"
                : "px-2 py-1"
            } `;
            icoSize = 18;
            break; 
        case "medium": // Default
            sizeStyles = `text-base ${
                variant === "ico" ?
                "flex items-center justify-center w-[40px] h-[40px]"
                : "px-4 py-2"
            }`;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = `text-xl ${
                variant === "ico" ?
                "flex items-center justify-center w-[60px] h-[60px]"
                :"px-8 py-4"
            }`;
            icoSize = 30;
            break;
    }


    return (
        <>
            <button
                type="button"
                className={clsx(variantStyles, sizeStyles, icoSize)}
                onClick={() => console.log("Button clicked")}
                disabled={disabled}
            >
                {icon && variant === "ico" ? (
                    <icon.icon size={icoSize}/>
                    ) : ( <div className={clsx(icon && "flex items-center gap-2")}>
                        {icon && iconPosition === "left" && (
                            <icon.icon size={icoSize}/>
                        )}
                        {children}
                        {icon && iconPosition === "right" && (
                            <icon.icon size={icoSize}/>
                        )}
                    </div> )}

                
            </button>
        </>
    );
}