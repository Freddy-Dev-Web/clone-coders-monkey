import clsx from "clsx";

interface TypographyProps {
variant?: 
"display" 
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
component?: "h1"| "h2" | "h3" | "h4" | "h5" | "div" | "span" | "p";
theme?: "black" | "white" | "gray" | "primary" | "secondary";
weight?: "regular" | "medium";
className?: string;
children: React.ReactNode;
}

export const Typography = (
    {
    variant = "h3", 
    component: Component = "div", 
    theme = "black", 
    weight = "regular",
    className,
    children}: TypographyProps) => {

    let variantStyle: string = ""; 
    let colorStyle: string = "";
    

    switch (variant) {
        case "display":
            variantStyle = "text-8xl-custom";
            break;
        case "h1":
            variantStyle = "text-7xl-custom";
            break;
        case "h2":
          variantStyle = "text-6xl-custom";
          break;
        case "h3":
            variantStyle = "text-5xl-custom";
            break;
        case "h4":
            variantStyle = "text-4xl-custom";
            break;
        case "h5":
            variantStyle = "text-3xl-custom";
            break;
        case "lead":
            variantStyle = "text-2xl-custom";
            break;
        case "body-lg":
            variantStyle = "text-lg-custom";
            break;
        case "body-base":
            variantStyle = "text-base-custom";
            break;
        case "body-sm":
            variantStyle = "text-sm-custom";
            break;
        case "caption1":
            variantStyle = "text-caption1-custom";
            break;
        case "caption2":
            variantStyle = "text-caption2-custom";
            break;
        case "caption3":
            variantStyle = "text-caption3-custom";
            break;
        case "caption4":
            variantStyle = "text-caption4-custom";
            break;
        default:
            variantStyle = "text-base-custom";
            break;
    }

    switch (theme) {
        case "black": //DEFAULT 
            colorStyle = "text-gray";
            break;
        case "white":
            colorStyle = "text-white";
            break;
        case "gray":
            colorStyle = "text-gray-700";
            break;
        case "primary":
            colorStyle = "text-primary";
            break;
        case "secondary":
            colorStyle = "text-secondary";
            break;
        default:
            
            break;
    }

  return (
    <Component className={clsx(variantStyle, colorStyle, weight === "medium" && "font-medium", className, theme)}>
        {children}
    </Component> 
  );
};