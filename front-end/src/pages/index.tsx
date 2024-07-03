import {Seo} from "@/ui/components/seo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {RiUser6Fill, RiUser6Line} from "react-icons/ri";
import {Logo} from "@/ui/design-system/logo/logo";
import {Avatar} from "@/ui/design-system/avatar/avatar";
import {Navigation} from "@/ui/components/navigation/navigation";

export default function Home() {
    return (
        <>
            <Seo title="Home" description="Home page"/>
            <Navigation/>
        </>
    );
}
