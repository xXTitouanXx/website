import {RegisterView} from "@/ui/modules/authenfication/register/register.view";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterFormFieldsType} from "@/types/form";
import {fireBaseCreateUser} from "@/api/authentication";
import {toast} from "react-toastify";
import {useToggle} from "@/hooks/use-toggle";
import {useRouter} from "next/router";
import {firestoreCreateDocument} from "@/api/firestore";

export const RegisterContainer = () => {
    const router = useRouter()
    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle()
    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>();
    const handleCreateUserDocument = async (collectionName: string, documentID: string, data: object) => {
        const {error} = await firestoreCreateDocument(collectionName, documentID, data)
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("Register user created successfully.")
        setIsLoading(false)
        reset()
        router.push("/mon-espace")
    }
    const handleCreateUserAuthentication = async ({
                                                      email,
                                                      password,
                                                      hear,
                                                  }: RegisterFormFieldsType) => {
        const {error, data} = await fireBaseCreateUser(email, password)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        const userDocumentData = {
            email: email,
            hear: hear,
            uid: data.uid,
            creation_date: new Date(),

        }
        handleCreateUserDocument("users", data.uid, userDocumentData)
    }
    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        const {password} = formData;
        if (password.length < 6) {
            setError("password", {
                type: "manual",
                message: "Passwords must be between 6 and 12 characters.",
            })
            return
        }
        handleCreateUserAuthentication(formData)
    }

    return (
        <RegisterView
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