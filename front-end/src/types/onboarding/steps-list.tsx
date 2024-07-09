export interface BaseComponentProps {
    next: () => void
    prev: () => void
    isFirstStep: () => boolean
    isFinalStep: () => boolean
    getCurrentStep: () => onboardingStepListInterface | undefined
    stepList: onboardingStepListInterface[]
}

export interface onboardingStepListInterface {
    id: number
    label: string
    component: {
        step: React.ComponentType<BaseComponentProps>
    }
}