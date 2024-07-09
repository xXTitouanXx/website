import {OnboardingView} from "@/ui/modules/onboarding/onboarding.view";
import {useState} from "react";
import {WelcomeSteps} from "@/ui/modules/onboarding/components/steps/welcome-step";
import {onboardingStepListInterface} from "@/types/onboarding/steps-list";
import {ProfileSteps} from "@/ui/modules/onboarding/components/steps/profile-step";

export const OnboardingContainer = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const stepList: onboardingStepListInterface[] = [
        {
            id: 1,
            label: "Bienvenue",
            component: {
                step: WelcomeSteps,
            },
        },
        {
            id: 2,
            label: "Profile",
            component: {
                step: ProfileSteps,
            },
        },
        {
            id: 3,
            label: "Avatar",
            component: {
                step: ProfileSteps,
            },
        }
    ]
    const getCurrentStep = () => {
        return stepList.find((el) => el.id === currentStep);
    }
    const next = () => {
        if (currentStep < stepList.length) {
            setCurrentStep(currentStep + 1)
        }
    }
    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }
    const isFirstStep = () => {
        if (currentStep === 1) {
            return true
        }
        return false
    }
    const isFinalStep = () => {
        if (currentStep === stepList.length) {
            return true
        }
        return false
    }
    return (
        <OnboardingView
            getCurrentStep={getCurrentStep}
            next={next}
            prev={prev}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            stepList={stepList}
        />
    )
}