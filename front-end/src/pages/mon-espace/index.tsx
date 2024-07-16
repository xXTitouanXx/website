import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {ProfileContainer} from "@/ui/modules/user-profile/profile/profile.container";
import {REGISTERED} from "@/lib/session-status";

export default function UserAccount() {
    return (
        <>
            <Seo title="Mon compte" description="Description du compte"/>
            <Layout withSideBar sessionStatus={REGISTERED}>
                <ProfileContainer/>
            </Layout>
        </>
    );
}
