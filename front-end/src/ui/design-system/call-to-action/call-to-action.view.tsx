import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {LinkTypes} from "@/lib/link-type";
import {Container} from "@/ui/components/container";
import Image from "next/image";

export const CallToActionView = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" component="h2" theme="white">
                        javhn dbfvoa bvpianvfa ...
                    </Typography>
                    <div>
                        <Button variant="succes" baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                            ovarbovaq
                        </Button>
                    </div>
                </div>
                <div>
                    <Image width={1210} height={1210} src="assets/svg/bomb.svg" alt="Bombe avec halo"
                           className="absolute -bottom-[620px] right-[0px]"/>
                </div>
            </Container>
        </div>
    )
}