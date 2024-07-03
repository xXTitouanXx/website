import {Container} from "@/ui/components/container";
import {Logo} from "@/ui/design-system/logo/logo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import Link from "next/link";
import {ActiveLink} from "@/ui/components/navigation/active-link";

interface NavigationProps {
}

export const Navigation = ({}: NavigationProps) => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <div className="flex items-center gap-2.5">
                    <Logo size="small"/>
                    <div className="flex flex-col">
                        <div className="text-gray font-extrabold text-[24px]">
                            Website
                        </div>
                        <Typography
                            variant="caption4"
                            component="span"
                            theme="gray"
                        >
                            Trouve de l'inspiration et reçois des feedbacks
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <Typography
                        variant="caption3"
                        component="div"
                        className="flex items-center gap-7"
                    >
                        <ActiveLink href="/home"></ActiveLink>
                        <ActiveLink href="/projects">Projets</ActiveLink>
                        <ActiveLink href="/formation">Formations</ActiveLink>
                        <ActiveLink href="/contact">Contacts</ActiveLink>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small">Connexion</Button>
                        <Button size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};
