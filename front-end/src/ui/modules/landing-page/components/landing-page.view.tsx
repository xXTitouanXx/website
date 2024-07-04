import {HeroTopView} from "@/ui/modules/landing-page/components/hero-top/hero-top.view";
import {FeaturedView} from "@/ui/modules/landing-page/components/featured/featured.view";
import {SlackView} from "@/ui/modules/landing-page/components/slack/slack.view";
import {CurrentCourseView} from "@/ui/modules/landing-page/components/current-course/current-course.view";
import {HighlightListView} from "@/ui/modules/landing-page/components/highlight-list/highlight-list.view";
import {CallToActionView} from "@/ui/design-system/call-to-action/call-to-action.view";

export const LandingPageView = () => {
    return (
        <>
            <HeroTopView/>
            <FeaturedView/>
            <SlackView/>
            <CurrentCourseView/>
            <HighlightListView/>
            <CallToActionView/>
        </>
    )
}