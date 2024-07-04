import {Seo} from "@/ui/components/seo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {RiUser6Fill, RiUser6Line} from "react-icons/ri";
import {Logo} from "@/ui/design-system/logo/logo";
import {Avatar} from "@/ui/design-system/avatar/avatar";
import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";
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
