import {Seo} from "@/ui/components/seo";
import {REGISTERED} from "@/lib/session-status";
import {Session} from "@/ui/components/session/session";

export default function onboarding() {
    return (
        <>
            <Seo title="Onboarding" description="Description de la page onboarding"/>
            <Session sessionStatus={REGISTERED}>
                b
            </Session>
        </>
    )
}