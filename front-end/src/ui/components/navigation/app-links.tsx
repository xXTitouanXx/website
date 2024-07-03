import {AppLinks} from "@/types/app-links";

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
        baseUrl: "https://www.linkedin.com/feed/",
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
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
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
const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "/#",
        type: "external",
    },
    {
        label: "GitHub",
        baseUrl: "/#",
        type: "external",
    },
    {
        label: "Instagram",
        baseUrl: "/#",
        type: "external",
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