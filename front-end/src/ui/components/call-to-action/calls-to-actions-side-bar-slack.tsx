import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import Image from "next/image";

export const CallsToActionsSideBarSlack = () => {
    return (
        <div
            className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-secondary">
            <Typography
                variant="lead"
                theme="black"
                weight="medium"
                className="text-center"
            >
                Rejoins nous sur slack
            </Typography>
            <div className="flex justify-center z-10"> {/* Ajout de z-10 pour le bouton */}
                <Button
                    variant="black"
                    baseUrl="https://google.com"
                    linkType="external"
                >
                    Rejoindre
                </Button>
            </div>
            <Image src="/assets/svg/slack.svg" alt="Slack logo" width={200.78} height={201.18}
                   className="absolute bottom-0 -right-3 z-0"/>
        </div>
    )
}
