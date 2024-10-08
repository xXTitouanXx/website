import {ScreenSpinner} from "@/ui/design-system/spinner/screen-spinner";
import {useAuth} from "@/context/AuthUserContext";
import {useRouter} from "next/router";
import {SessionStatusTypes} from "@/types/SessionStatusTypes";
import {GUEST, REGISTERED} from "@/lib/session-status";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes
}

export const Session = ({children, sessionStatus}: Props) => {
    const {authUserIsLoading, authUser} = useAuth()
    const router = useRouter()
    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted
    const shouldRedirectToOnboarding = () => {
        return !authUserIsLoading && authUser && !onboardingIsCompleted && router.asPath !== "/onboarding"
    }
    const shouldNotRedirectToOnboarding = () => {
        return !authUserIsLoading && authUser && onboardingIsCompleted && router.asPath === "/onboarding"
    }

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding")
        return <ScreenSpinner/>
    }
    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace")
        return <ScreenSpinner/>
    }
    if (!authUserIsLoading && sessionStatus == GUEST) {
        if (!authUser) {
            return <>{children} </>
        } else {
            router.push("/mon-espace")
        }
    }
    if (!authUserIsLoading && sessionStatus == REGISTERED) {
        if (authUser) {
            return <>{children} </>
        } else {
            router.push("/connexion")
        }
    }
    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>
    }
    return (
        <ScreenSpinner/>
    )
}