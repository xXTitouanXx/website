import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {RegisterContainer} from "@/ui/modules/authenfication/register/register.container";
import {GUEST} from "@/lib/session-status";

export default function Register() {
    return (
        <>
            <Seo title="Inscription"
                 description="Page d'inscription"
            />
            <Layout sessionStatus={GUEST}>
                <RegisterContainer/>
            </Layout>
        </>
    )
}