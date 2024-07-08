import {LoginView} from "@/ui/modules/authenfication/login/login.view";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginFormFieldsType} from "@/types/form";
import {useToggle} from "@/hooks/use-toggle";
import {fireBaseSignUser} from "@/api/authentication";
import {toast} from "react-toastify";
import {useRouter} from "next/router";


export const LoginContainer = () => {
    const router = useRouter()
    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle()

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm<LoginFormFieldsType>();
    const handleSignUser = async ({
                                      email,
                                      password,
                                  }: LoginFormFieldsType) => {
        const {error} = await fireBaseSignUser(email, password)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        toast.success("Login successfully.")
        setIsLoading(false)
        reset()
        router.push("/mon-espace")
    }
    const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
        const {password} = formData;
        if (password.length < 6) {
            setError("password", {
                type: "manual",
                message: "Passwords must be between 6 and 12 characters.",
            })
            return
        }
        handleSignUser(formData)
    }

    return (
        <LoginView
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