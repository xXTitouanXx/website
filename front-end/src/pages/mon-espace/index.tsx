import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {UserAccountContainer} from "@/ui/modules/user-profile/user-account/user-account.container";

export default function Home() {
    return (
        <>
            <Seo title="Mon compte" description="Description du compte"/>
            <Layout withSideBar>
                <UserAccountContainer/>
            </Layout>
        </>
    );
}
