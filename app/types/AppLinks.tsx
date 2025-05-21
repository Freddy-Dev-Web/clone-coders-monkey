import { IconType } from "react-icons";
import { LinkType } from "../lib/Link-Type";

export interface AppLinks {
    label: string;
    type: LinkType;
    baseUrl: string;
    icon?: IconType;
}

export interface FooterLinks {
    label: string;
    links: AppLinks[];
}