import {Container} from "@/ui/components/container";
import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";
import {RiPlayCircleLine} from "react-icons/ri";

export const CurrentCourseView = () => {
    return (
        <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5">
                    Current Course
                </Typography>
                <Typography variant="lead" component="h3" className="mb-5">
                    vioqzbdsqobznbzon
                </Typography>
                <Typography variant="caption3" component="p" theme="gray" className="mb-16">
                    kahjbepjvbaepfvqmwbmldvsf wvfe,zpqonoqvosqbnfs qcnd qdeo
                </Typography>
                <a href="/#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div
                            className="flex flex-col items-center justify-center relative z-10 gap-2 h-full opacity-0 bg-gray rounded hover:opacity-95 text-white animate">
                            <RiPlayCircleLine size={42}/>
                            <Typography variant="caption2" theme="white" weight="medium" className="uppercase">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image fill src="assets/images/course.jpg" alt="Object"
                               className="object-cover object-center rounded"/>
                    </div>
                </a>
            </Container>
        </div>
        // <Container className="flex justify-between">
        //     <div className="flex flex-col justify-center max-w-2xl space-y-5">
        //         <div className="flex items-center gap-2">
        //             <Logo size="very-small"/>
        //             <Typography variant="caption2" component="span" weight="medium">
        //                 Website
        //             </Typography>
        //         </div>
        //         <Typography variant="h2" component="h2">
        //             aoivbodeaiqbpideba vaieb viab vf
        //         </Typography>
        //         <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
        //             v iab bivka j aorp hfojaqf ojuafe jafe fojhae jfaeojup fnbzs pae zfbjqz djhfv aeijrb gpab vzpq
        //         </Typography>
        //         <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
        //             oznvoanv
        //         </Button>
        //     </div>
        //     <div className="relative w-[600px] h-[600px]">
        //         <Image fill src={"/assets/svg/slack-logo.svg"} alt="Slack"/>
        //     </div>
        // </Container>
    )
};