import {Container} from "@/ui/components/container";
import {Typography} from "@/ui/design-system/typography/typography";
import {footerLinks} from "@/ui/components/navigation/app-links";
import {v4 as uuidv4} from "uuid";
import {ActiveLink} from "@/ui/components/navigation/active-link";
import {Footerlinks} from "@/types/app-links";
import {LinkTypes} from "@/lib/link-type"

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerNavigationList = footerLinks.map((columnLinks) => (
        <FooterLink key={uuidv4()} data={columnLinks}/>
    ));
    return (
        <div className="py-40 bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography variant="caption1" theme="white" weight="medium">
                        Formations gratuites
                    </Typography>
                    <Typography variant="caption3" theme="gray">
                        Abonne-toi
                    </Typography>
                </div>
                <div className="flex gap-7">{footerNavigationList}</div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800"/>
                <div className="flex items-center justify-center">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © ${currentYear} | Propulsé par `}
                        <a href="https://www.linkedin.com/feed/">Titouan Abbate</a>
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

interface FooterLinkProps {
    data: Footerlinks;
}

const FooterLink = ({data}: FooterLinkProps) => {
    const linksList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank" rel="noopener noreferrer">
                    {link.label}
                </a>
            )}
        </div>
    ));
    return (
        <div className="min-w-[190px]">
            <Typography theme="white" variant="caption2" weight="medium" className="pb-5">
                {data.label}
            </Typography>
            <div className="space-y-4">{linksList}</div>
        </div>
    );
};