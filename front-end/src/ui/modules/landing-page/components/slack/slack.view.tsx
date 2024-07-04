import {Container} from "@/ui/components/container";
import Image from "next/image";
import {Logo} from "@/ui/design-system/logo/logo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {LinkTypes} from "@/lib/link-type";

export const SlackView = () => {
    return (
        <Container className="flex justify-between">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-2">
                    <Logo size="very-small"/>
                    <Typography variant="caption2" component="span" weight="medium">
                        Website
                    </Typography>
                </div>
                <Typography variant="h2" component="h2">
                    aoivbodeaiqbpideba vaieb viab vf
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    v iab bivka j aorp hfojaqf ojuafe jafe fojhae jfaeojup fnbzs pae zfbjqz djhfv aeijrb gpab vzpq
                </Typography>
                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                    oznvoanv
                </Button>
            </div>
            <div className="relative w-[600px] h-[600px]">
                <Image fill src={"/assets/svg/slack-logo.svg"} alt="Slack"/>
            </div>
        </Container>
    )
};