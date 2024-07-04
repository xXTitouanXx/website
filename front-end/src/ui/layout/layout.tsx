import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Navigation/>
            {children}
            <Footer/>
        </>
    )
}