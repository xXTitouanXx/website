import {RegisterView} from "@/ui/modules/authenfication/register/register.view";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterFormFieldsType} from "@/types/form";
import {useState} from "react";

export const RegisterContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        handleSubmit,
        control,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>();

    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
setIsLoading(true)
    }

    return (
        <><RegisterView
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
        </>
    )
};