import {Container} from "@/ui/components/container";
import {v4 as uuidv4} from "uuid";
import {Typography} from "@/ui/design-system/typography/typography";
import Image from "next/image";
import {Button} from "@/ui/design-system/button/button";
import {RiArrowRightLine} from "react-icons/ri";
import {SocialNetworkButton} from "@/ui/design-system/button/social-network-button";

interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
}

const featuresData: FeaturesListInterface[] = [
    {
        imagePath: "/assets/svg/floppy.svg",
        imageAlt: "illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources pour les devs",
    },
    {
        imagePath: "/assets/svg/gamepad.svg",
        imageAlt: "illustration",
        title: "Entrainement",
        description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
    },
    {
        imagePath: "/assets/svg/speaker.svg",
        imageAlt: "illustration",
        title: "Visibilité",
        description: "Expose tes projets et crée toi des opportunités !",
    },
    {
        imagePath: "/assets/svg/compass.svg",
        imageAlt: "illustration",
        title: "Relations",
        description: "Connecte-toi avec des devs web et booste ta carrière !",
    },
]
export const FeaturedView = () => {
    const featuredList = featuresData.map((feature) => (
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 px-10 overflow-hidden">
                <Image fill className="object-scale-down blur-2xl" src={feature.imagePath} alt={feature.imageAlt}/>
                <Image fill className="object-scale-down" src={feature.imagePath} alt={feature.imageAlt}/>
            </div>
            <Typography variant="lead" component="h3" weight="medium"
                        className="text-center mb-2.5">{feature.title}</Typography>
            <Typography variant="body-base" component="p" theme="gray"
                        className="text-center">{feature.description}</Typography>
        </div>
    ));

    return (
        <div className="bg-gray-300">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
                <div className="flex flex-col justify-between col-span-5 gap-10">
                    <div>
                        <Typography variant="h2" component="h2" className="mb-5">
                            uycabiabcibaiuyc uycabiabcibai
                        </Typography>
                        <Typography variant="body-lg" component="p" theme="gray" className="mb-8">
                            uycabiabcibai azbhdevpiaqb ep pfvd ipjf ifa eae pifedzpi hfqz
                            uycabiabcibai azbhdevpiaqb ep pfvd ipjf ifa eae pifedzpi hfqz
                            uycabiabcibai azbhdevpiaqb ep pfvd ipjf ifa eae pifedzpi hfqz
                        </Typography>
                        <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}}
                                iconPosition="right">Commencer</Button>
                    </div>
                    <div>
                        <Typography variant="caption3" theme="gray" component="div" className="mb-4">Nos réseaux
                            sociaux</Typography>
                        <SocialNetworkButton/>
                    </div>
                </div>
            </Container>
        </div>
    )
}