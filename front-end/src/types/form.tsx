export interface RegisterFormFieldsType {
    email: string
    password: string
    hear: string
}

export interface LoginFormFieldsType {
    email: string
    password: string
}

export interface ForgetPasswordFormFieldsType {
    email: string
}

export interface FormType {
    control?: any
    onSubmit: any
    errors: any
    isLoading: boolean
    register: any
    handleSubmit: any
}