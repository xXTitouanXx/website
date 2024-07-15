import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";
import {BreadCrumbs} from "@/ui/components/breadcrumbs/breadcrumbs";
import {ReactElement} from "react";
import {Container} from "@/ui/components/container";
import {UserAccountNavigation} from "@/ui/components/navigation/user-account-navigation";
import {Session} from "@/ui/components/session/session";
import {SessionStatusTypes} from "@/types/SessionStatusTypes";
import {CallToActionsSideBarContribution} from "@/ui/components/call-to-action/calls-to-actions-side-bar-contribution";
import {CallsToActionsSideBarSlack} from "@/ui/components/call-to-action/calls-to-actions-side-bar-slack";

interface LayoutProps {
    children: React.ReactNode;
    isDisplayBreadCrumbs?: boolean;
    withSideBar?: boolean
    sessionStatus?: SessionStatusTypes
}

export const Layout = ({children, isDisplayBreadCrumbs = true, withSideBar, sessionStatus}: LayoutProps) => {
    let view: ReactElement = <></>
    if (withSideBar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3 space-y-8">
                        <UserAccountNavigation/>
                        <CallToActionsSideBarContribution/>
                        <CallsToActionsSideBarSlack/>
                    </div>
                    <div className="col-span-3 ">{children}</div>
                </div>
            </Container>
        )
    } else {
        view = <>{children}</>
    }
    return (
        <Session sessionStatus={sessionStatus}>
            <Navigation/>
            {isDisplayBreadCrumbs && <BreadCrumbs/>}
            {view}
            <Footer/>
        </Session>
    )
}