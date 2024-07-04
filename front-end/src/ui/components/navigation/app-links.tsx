import {AppLinks} from "@/types/app-links";
import {RiGithubFill, RiInstagramFill, RiLinkedinFill} from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Projects",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Website",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Formations",
        baseUrl: "/#",
        type: "external",
    },
];
const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
];
const footerInformationsLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    },
];
export const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/titouan-abbate-13ba10240/",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "GitHub",
        baseUrl: "https://github.com/xXTitouanXx",
        type: "external",
        icon: RiGithubFill,
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/titouanabt/",
        type: "external",
        icon: RiInstagramFill,
    },
];
export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks,
    },
    {
        label: "Informations",
        links: footerInformationsLinks,
    },
    {
        label: "Réseaux",
        links: footerSocialNetworkLinks,
    },
];