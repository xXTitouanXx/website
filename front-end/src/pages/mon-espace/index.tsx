import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {UserAccountContainer} from "@/ui/modules/user-profile/user-account/user-account.container";
import {REGISTERED} from "@/lib/session-status";

export default function UserAccount() {
    return (
        <>
            <Seo title="Mon compte" description="Description du compte"/>
            <Layout withSideBar sessionStatus={REGISTERED}>
                <UserAccountContainer/>
            </Layout>
        </>
    );
}
