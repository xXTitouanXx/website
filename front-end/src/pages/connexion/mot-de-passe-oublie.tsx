import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {ForgetPasswordContainer} from "@/ui/modules/authenfication/forget-password/forget-password.container";

export default function ForgetPassword() {
    return (
        <>
            <Seo title="Mot de passe oublié"
                 description="Page de mot de passe oublié"
            />
            <Layout>
                <ForgetPasswordContainer/>
            </Layout>
        </>
    )
}