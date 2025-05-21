import Image from "next/image"
import { Typography } from "../../design-system/typography/Typography"
import { Container } from "../Container/Container"
import { nanoid } from 'nanoid';
import { AppLinks, FooterLinks } from "@//types/AppLinks";
import { ActiveLink } from "./ActiveLink";
import { footerLinks } from "./NavLinks";
import { LinkTypes } from "@//lib/Link-Type";
import { SocialNetworkButton } from "./Social-Networks-Button";



export const Footer = () => {

    const currentYear = new Date().getFullYear()

    const FooterNavigationLinks = footerLinks.map((colomnLinks) => {
       return <FooterLink key={nanoid()} data={colomnLinks} />
    })


    return (
        <div className="bg-gray">
            <Container className="flex justify-between py-16">
                <div className="flex flex-col items-center gap-7">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                    variant="caption1"
                    theme="white"
                    weight="medium"
                    >
                        Formations gratuites
                    </Typography>
                    <Typography
                    variant="caption3"
                    theme="gray"
                    >
                        Abonne-toi a la chaine
                    </Typography>
                    </div>
                    <div className=" bg-white w-24 h-24 pt-6 pl-5" style={{ borderRadius: '10px 100px / 120px' }}>
                    <a href="https://www.youtube.com/@remotemonkey" target="_blank">
                    <Image 
                    src="/svg/youtube.svg" 
                    alt="Remote Monkey| Youtube" 
                    width={49} height={36} 
                    />
                    </a>
                    </div>
                </div>
                <div className="flex gap-7">{FooterNavigationLinks}</div>
            </Container>
                <Container className="pt-9 pb-11 space-y-11">
                    <hr className="text-gray-800" />
                    <div className="flex items-center justify-between">
                        <Typography variant="caption4" theme="gray">
                            {`Copyright © ${currentYear} | Propulsed by`} {""}
                            <a 
                            href="https://freddy-portfolio-three.vercel.app/" 
                            target="_blank" 
                            className="underline link-hover"
                            >
                                Freddy Mandaba
                            </a>
                        </Typography>
                        <div className="">
                            <SocialNetworkButton theme="gray"/>
                        </div>
                    </div>
                </Container>
        </div>
    )
}

interface FooterLinkProps {
    data: FooterLinks;
}


    const FooterLink = ({data}: FooterLinkProps) => {

        const LinksList = data.links.map((link: AppLinks) => (
            <div key={`${link.label}-${link.baseUrl}`}>
                {link.type === LinkTypes.INTERNAL && (
                    <ActiveLink href={link.baseUrl} className="link-hover">{link.label}</ActiveLink>
                )}
                {link.type === LinkTypes.EXTERNAL && (
                    <a href={link.baseUrl} target="_blank" className="link-hover">
                        {link.label}
                    </a>
                )}
            </div>
        ))

        return (
            <div className="min-w-[190px]">
                <Typography 
                variant="caption2" 
                theme="white" 
                weight="medium" 
                className="pb-4"
                >
                    {data.label}
                </Typography>

                <Typography 
                variant="caption3" 
                theme="gray" 
                className="space-y-4"
                >
                    {LinksList}
                </Typography>
            </div>
        )
    }
