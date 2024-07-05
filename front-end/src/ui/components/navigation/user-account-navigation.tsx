import {Box} from "@/ui/design-system/box/box";
import {fireBaseLogoutUser} from "@/api/authentication";
import {toast} from "react-toastify";
import {Button} from "@/ui/design-system/button/button";
import {Typography} from "@/ui/design-system/typography/typography";
import {ActiveLink} from "@/ui/components/navigation/active-link";
import {useRouter} from "next/router";

export const UserAccountNavigation = () => {
    const router = useRouter()
    const handleLogoutUser = async () => {
        const {error} = await fireBaseLogoutUser()
        if (error) {
            toast.error(error.message);
            return
        }
        toast.success("User logged out successfully!");
        router.push("/connexion")
    }
    return (
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace/mes-projets">Mes projets</ActiveLink>
                </Typography>
            </div>
            <Button action={handleLogoutUser} variant="danger">Déconnexion</Button>
        </Box>
    )
}