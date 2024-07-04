import {Container} from "@/ui/components/container";
import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";

export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 pb-52 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h1" component="h1" className="max-w-lg">Rejoins le site web</Typography>
                <Typography variant="body-lg" component="p" theme="gray"
                            className="max-w-xl">ewsrdxtcfyvgubhinjo,kxrdtcfyv
                    gubhinjk,werxdtcfyvgtubhyinjo,kxerdctfyvgubhinjo,exsrdctfvygbuh</Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl="">Commencer</Button>
                    <Button baseUrl="" variant="secondary">En savoir plus</Button>
                </div>
            </div>
            <Image src="/assets/svg/rocket.svg" alt="Illustration d'une fusée" width={811} height={596}
                   className="absolute top-0 right-0 z-0"/>
        </Container>
    )
}