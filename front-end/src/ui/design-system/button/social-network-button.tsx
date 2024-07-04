import {footerSocialNetworkLinks} from "@/ui/components/navigation/app-links";
import {Button} from "@/ui/design-system/button/button";
import {v4 as uuidv4} from "uuid";
import {VscError} from "react-icons/vsc";
import clsx from "clsx";

interface SocialNetworkButtonProps {
    theme?: "gray" | "accent" | "secondary";
    className?: string;
}

export const SocialNetworkButton = ({className, theme = "accent"}: SocialNetworkButtonProps) => {
    const icoList = footerSocialNetworkLinks.map((socialNetwork) => (
        <Button
            key={uuidv4()}
            variant="ico"
            iconTheme={theme}
            icon={{icon: socialNetwork.icon ? socialNetwork.icon : VscError}}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ));
    return <div className={clsx(className, "flex items-center gap-2.5")}>{icoList}</div>;
};