import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {LoginContainer} from "@/ui/modules/authenfication/login/login.container";
import {GUEST} from "@/lib/session-status";

export default function Connexion() {
    return (
        <>
            <Seo title="Connexion"
                 description="Page de connexion"
            />
            <Layout sessionStatus={GUEST}>
                <LoginContainer/>
            </Layout>
        </>
    )
}