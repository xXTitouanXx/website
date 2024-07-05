import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";
import {BreadCrumbs} from "@/ui/components/breadcrumbs/breadcrumbs";
import {ReactElement} from "react";
import {Container} from "@/ui/components/container";
import {UserAccountNavigation} from "@/ui/components/navigation/user-account-navigation";

interface LayoutProps {
    children: React.ReactNode;
    isDisplayBreadCrumbs?: boolean;
    withSideBar?: boolean
}

export const Layout = ({children, isDisplayBreadCrumbs = true, withSideBar}: LayoutProps) => {
    let view: ReactElement = <></>
    if (withSideBar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3 h-96 ">
                        <UserAccountNavigation/>
                    </div>
                    <div className="col-span-3 h-96 ">{children}</div>
                </div>
            </Container>
        )
    } else {
        view = <>{children}</>
    }
    return (
        <>
            <Navigation/>
            {isDisplayBreadCrumbs && <BreadCrumbs/>}
            {view}
            <Footer/>
        </>
    )
}