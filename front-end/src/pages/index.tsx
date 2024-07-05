import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {LandingPageContainer} from "@/ui/modules/landing-page/components/landing-page.container";

export default function Home() {
    return (
        <>
            <Seo title="Home" description="Home page"/>
            <Layout isDisplayBreadCrumbs={false}>
                <LandingPageContainer/>
            </Layout>
        </>
    );
}
