import {BaseComponentProps} from "@/types/onboarding/steps-list";
import {useAuth} from "@/context/AuthUserContext";
import {useToggle} from "@/hooks/use-toggle";
import {Container} from "@/ui/components/container";
import {Typography} from "@/ui/design-system/typography/typography";
import {OnboardingFooter} from "@/ui/modules/onboarding/components/onboarding-footer";
import {Logo} from "@/ui/design-system/logo/logo";
import {useCallback, useRef, useEffect} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import {firestoreUpdateDocument} from "@/api/firestore";
import {toast} from "react-toastify";

// Import des presets individuellement si nécessaire
// import { Vortex, Crossfire, Snow, Realistic, Explosion, Pride, Photons, Fireworks } from "react-canvas-confetti";

export const FinalStep = ({isFinalStep}: BaseComponentProps) => {
    const {authUser} = useAuth();
    const {value: isLoading, toggle} = useToggle();
    const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

    const getInstance = useCallback(({confetti}: { confetti: (opts: any) => void }) => {
        refAnimationInstance.current = confetti;
    }, []);

    const makeShot = useCallback((particleRatio: number, opts: any) => {
        if (refAnimationInstance.current !== null) {
            refAnimationInstance.current({
                ...opts,
                origin: {y: 0.7},
                particleCount: Math.floor(200 * particleRatio),
            });
        }
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        makeShot(0.2, {
            spread: 60,
        });
        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);

    useEffect(() => {
        setTimeout(() => {
            fire();
        }, 50)
    }, []);

    const handleCloseOnboarding = async () => {
        toggle()
        const data = {
            onboardingIsCompleted: true,
        }
        const {error} = await firestoreUpdateDocument("users", authUser.uid, data)
        if (error){
            toggle()
            toast.error(error.message)
            return
        }
        toggle()
    };

    return (
        <>
            <ReactCanvasConfetti
                onInit={getInstance}
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                }}
            />
            <div className="relative h-screen pb-[91px]">
                <div className="h-full overflow-auto">
                    <Container className="h-full grid-cols-12">
                        <div className="relative z-10 flex items-center h-full py-10">
                            <div className="max-w-xl w-full mx-auto space-y-5 pb-4.5">
                                <div className="flex justify-center">
                                    <Logo size="large"/>
                                </div>
                                <Typography variant="h1" component="h1" className="text-center">
                                    Félicitations !
                                </Typography>
                                <Typography
                                    variant="body-base"
                                    component="p"
                                    theme="gray"
                                    className="text-center"
                                >
                                    Tu fais maintenant partie du website ! Nous sommes ravis de t'accueillir parmi nous.
                                    Tu vas pouvoir te lancer dans l'aventure, partager tes projets les plus fous et
                                    rencontrer des développeurs aussi passionnés que toi. Alors prépare-toi !
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </div>
                <OnboardingFooter
                    next={handleCloseOnboarding}
                    isFinalStep={isFinalStep}
                    isLoading={isLoading}
                />
            </div>
        </>
    );
};
