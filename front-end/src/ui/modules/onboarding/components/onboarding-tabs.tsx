import {onboardingStepListInterface} from "@/types/onboarding/steps-list";
import clsx from "clsx";
import {Typography} from "@/ui/design-system/typography/typography";

interface Props {
    tabs: onboardingStepListInterface[]
    getCurrentStep: () => onboardingStepListInterface | undefined
}

export const OnboardingTabs = ({
                                   tabs,
                                   getCurrentStep
                               }: Props) => {
    return (
        <div className="relative inline-block">
            <div className="flex items-center space-x-6">
                {tabs && tabs.map((tab) => tab.id !== tabs.length && (
                        <div key={tab.id} className={clsx(
                            getCurrentStep && getCurrentStep()?.id === tab.id ? "border-primary" : "border-gray-400",
                            "relative z-10 py-2.5 border-b-[2px]")}>
                            <Typography variant="caption3" weight="medium"
                                        theme={getCurrentStep && getCurrentStep()?.id === tab.id ? "primary" : "gray"}>{tab.label}</Typography>
                        </div>
                    )
                )}
            </div>
            <div className="absolute bottom-0 left-0 w-full border-b-[2px] border-gray-400"></div>
        </div>
    )
}