import {Seo} from "@/ui/components/seo";
import {REGISTERED} from "@/lib/session-status";
import {Session} from "@/ui/components/session/session";
import {OnboardingContainer} from "@/ui/modules/onboarding/onboarding.container";

export default function onboarding() {
    return (
        <>
            <Seo title="Onboarding" description="Description de la page onboarding"/>
            <Session sessionStatus={REGISTERED}>
                <OnboardingContainer/>
            </Session>
        </>
    )
}