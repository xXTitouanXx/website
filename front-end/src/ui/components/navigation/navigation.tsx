import {Container} from "@/ui/components/container";
import {Logo} from "@/ui/design-system/logo/logo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {ActiveLink} from "@/ui/components/navigation/active-link";
import useFirebaseAuth from "@/hooks/use-firebase-auth";
import {useAuth} from "@/context/AuthUserContext";
import {AccountAvatarNavigationLink} from "@/ui/components/navigation/account-avatar-link";

interface NavigationProps {
}

export const Navigation = ({}: NavigationProps) => {
    const {authUser} = useAuth()
    const authenticatficationSystem = (
        <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">Connexion</Button>
            <Button baseUrl="/connexion/inscription" size="small" variant="secondary">
                Rejoindre
            </Button>
        </div>
    )
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <div className="flex items-center gap-2.5">
                    <Logo size="small"/>
                    <div className="flex flex-col">
                        <div className="text-gray font-extrabold text-[24px]">Website</div>
                        <Typography variant="caption4" component="span" theme="gray">
                            Trouve de l'inspiration et reçois des feedbacks
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/home">Accueil</ActiveLink>
                        <ActiveLink href="/projects">Projets</ActiveLink>
                        <ActiveLink href="/formation">Formations</ActiveLink>
                        <ActiveLink href="/contact">Contacts</ActiveLink>
                    </Typography>
                    {!authUser ? authenticatficationSystem : <AccountAvatarNavigationLink/>}
                </div>
            </Container>
        </div>
    );
};