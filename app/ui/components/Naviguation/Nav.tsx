'use client'

import Button from "../../design-system/Button/Button"
import { Logo } from "../../design-system/logo/Logo"
import { Typography } from "../../design-system/typography/Typography"
import { Container } from "../Container/Container"
import { ActiveLink } from "./ActiveLink"

interface NavProps {
    text?: string
}

export const Nav = ({}: NavProps) => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between gap-7 py-2.5">
                <ActiveLink href="/" className="">
                <div className="flex items-center gap-2.5">
                    <Logo size="small"/>
                    <div className="flex flex-col">
                        <div className="text-gray font-extrabold text-[24px]">
                            Freddy Mandaba
                        </div>
                        <Typography variant="caption4" component="span" theme="gray">
                            Trouve de l&apos;inpiration & recois des feedbacks !
                        </Typography>
                    </div>
                </div>
                </ActiveLink>


                <div className="flex items-center gap-7">
                    <Typography 
                    variant="caption3" 
                    component="div" 
                    className="flex -items-center gap-2"
                    >
                        <ActiveLink href="/app/ui/components/design-system" className="link-hover">Design</ActiveLink>
                        <ActiveLink href="/" className="link-hover">Projets</ActiveLink>
                        <ActiveLink href="" className="link-hover">Formations</ActiveLink>
                        <ActiveLink href="" className="link-hover">Contacts</ActiveLink>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small">Connexion</Button>
                        <Button size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}