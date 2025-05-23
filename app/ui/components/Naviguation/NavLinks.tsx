import { LinkTypes } from "@//lib/Link-Type"
import { AppLinks } from "@//types/AppLinks"
import { RiFacebookBoxFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri"

  const FooterApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Projets",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Freddy Mandaba",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Formations",
        baseUrl: LinkTypes.EXTERNAL,
        type: "externe"
    },
]

 const FooterUserList: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Connexion",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Inscription",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Mot de passe oublie",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
]

 const FooterInfoList: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Confidentialite",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: " A propos",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
    {
        label: "Contact",
        baseUrl: LinkTypes.INTERNAL,
        type: "interne"
    },
]

 export const FooterReseauxList: AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "https://linkedin.com",
        type: "externe",
        icon: RiLinkedinFill
    },
    {
        label: "Youtube",
        baseUrl: "https://youtube.com",
        type: "externe",
        icon: RiYoutubeFill 
    },
    {
        label: "Slack",
        baseUrl: "https:facebook.com",
        type: "externe",
        icon: RiFacebookBoxFill 
    }
]



export const footerLinks = [
    {
        label: "App",
        links: FooterApplicationLinks
    },
    {
        label: "Utilisateur",
        links: FooterUserList
    },
    {
        label: "Informations",
        links: FooterInfoList
    },
    {
        label: "Reseaux",
        links: FooterReseauxList
    },
]