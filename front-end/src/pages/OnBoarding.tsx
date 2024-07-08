import {Seo} from "@/ui/components/seo";
import {Layout} from "@/ui/layout/layout";
import {REGISTERED} from "@/lib/session-status";

export default function onBoarding  ()  {
    return(
        <>
        <Seo title="OnBoarding" description="Description de la page onBoarding"/>
            <Layout sessionStatus={REGISTERED}>
                <div className="flex items-center justify-center">
                    welcome
                </div>
            </Layout>
        </>
    )
}