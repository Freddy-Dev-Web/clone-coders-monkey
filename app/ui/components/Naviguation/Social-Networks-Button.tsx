import { nanoid } from "nanoid"
import { FooterReseauxList } from "./NavLinks"
import Button from "../../design-system/Button/Button"
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";


interface Props {
    theme?: "gray" | "accent" | "secondary"
    className?: string;
}
export const SocialNetworkButton = ({
                            className, 
                            theme= "accent"}: Props) => {

         const icoList = FooterReseauxList.map((socialNetwork) => {
        const IconSocial = socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill

        

        return (
            
            <Button 
              key={nanoid()}
              variant="icon"
              iconTheme={theme}
              icon= { <IconSocial />}
              baseUrl={socialNetwork.baseUrl}
              linkType={socialNetwork.type}
              />
        )  
        
    })
    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>{icoList}</div>
    )
}