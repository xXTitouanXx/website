import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {LoginContainer} from "@/ui/modules/authenfication/login/login.container";

export default function Connexion() {
    return (
        <>
            <Seo title="Connexion"
                 description="Page de connexion"
            />
            <Layout>
                <LoginContainer/>
            </Layout>
        </>
    )
}