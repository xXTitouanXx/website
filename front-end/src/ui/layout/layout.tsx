import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";
import {BreadCrumbs} from "@/ui/components/breadcrumbs/breadcrumbs";

interface LayoutProps {
    children: React.ReactNode;
    isDisplayBreadCrumbs?: boolean;
}

export const Layout = ({children, isDisplayBreadCrumbs = true}: LayoutProps) => {
    return (
        <>
            <Navigation/>
            {isDisplayBreadCrumbs && <BreadCrumbs/>}
            {children}
            <Footer/>
        </>
    )
}