import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {RegisterContainer} from "@/ui/modules/authenfication/register/register.container";

export default function Register() {
    return (
        <>
            <Seo title="Inscription"
                 description="Page d'inscription"
            />
            <Layout>
                <RegisterContainer/>
            </Layout>
        </>
    )
}