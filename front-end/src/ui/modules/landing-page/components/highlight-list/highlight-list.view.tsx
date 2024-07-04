import {Container} from "@/ui/components/container";
import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";
import {RiArrowRightLine, RiCheckboxCircleLine} from "react-icons/ri";
import {Button} from "@/ui/design-system/button/button";

export const HighlightListView = () => {
    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image fill src="assets/svg/cake.svg" alt="Illustration d'un gateau"/>
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h3" component="h2">
                        pzbqijbnnâzjneb avqirb avaifr i faebi vabe!
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>qoernbzoe nhbozs</ListPoint>
                        <ListPoint>kqavqbei aqkav</ListPoint>
                        <ListPoint>kaqeiv aq a</ListPoint>
                    </div>
                    <div className="relative inline-block">
                        <Button baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
                            Let's go
                        </Button>
                        <Image width={25} height={27} src="assets/svg/cursor.svg" alt="curseur de souris"
                               className="absolute right-7 -bottom-5"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image fill src="assets/svg/spin.svg" alt="Illustration d'un gateau"/>
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h3" component="h2">
                        pzbqijbnnâzjneb avqirb avaifr i faebi vabe!
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>vav pobaprbv aupeh v</ListPoint>
                        <ListPoint>ojadbipvhb aà</ListPoint>
                        <ListPoint>jahbvfqovb aepj vavf aevpaervaperf vpaebvzvzvavava</ListPoint>
                    </div>
                    <div className="relative inline-block">
                        <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
                            Démarrer
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

interface Props {
    children: React.ReactNode;
}

const ListPoint = ({children}: Props) => {
    return (
        <div className="flex items-start gap-2">
            <RiCheckboxCircleLine size={24} className="mt-0.5 text-secondary"/>
            <Typography variant="body-lg" component="span">
                {children}
            </Typography>
        </div>
    )
}