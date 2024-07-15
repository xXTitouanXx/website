import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import Image from "next/image";

export const CallToActionsSideBarContribution = () => {
    return (
        <div
            className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-primary">
            <Typography
                variant="lead"
                theme="white"
                weight="medium"
                className="text-center"
            >
                Récompense mes efforts
            </Typography>
            <div className="flex justify-center">
                <Button
                    variant="success"
                    baseUrl="https://google.com"
                    linkType="external"
                >
                    Faire un don libre
                </Button>
            </div>
            <Image src="/assets/svg/pig.svg" alt="Cochon tirelire" width={183} height={183} className="absolute bottom-0 left-0"/>
        </div>
    )
}