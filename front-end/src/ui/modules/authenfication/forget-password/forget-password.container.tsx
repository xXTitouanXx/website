import {ForgetPasswordView} from "@/ui/modules/authenfication/forget-password/forget-password.view";
import {sendEmailToResetPassword} from "@/api/authentication";
import {useRouter} from "next/router";
import {useToggle} from "@/hooks/use-toggle";
import {SubmitHandler, useForm} from "react-hook-form";
import {ForgetPasswordFormFieldsType} from "@/types/form";
import {toast} from "react-toastify";

export const ForgetPasswordContainer = () => {
    const router = useRouter()
    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle()
    const {
        handleSubmit,
        formState: {errors},
        register,
        reset,
    } = useForm<ForgetPasswordFormFieldsType>();
    const handleResetPassword = async ({email}: ForgetPasswordFormFieldsType) => {
        const {error} = await sendEmailToResetPassword(email)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        toast.success(`Reset password email was sent to ${email}`)
        setIsLoading(false)
        reset()
        router.push("/connexion")
    }
    const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (formData) => {
        setIsLoading(true)
        handleResetPassword(formData)
    }

    return (
        <ForgetPasswordView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    )
};