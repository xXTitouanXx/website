import clsx from "clsx";
import {Typography} from "@/ui/design-system/typography/typography";

interface IProps {
    isLoading: boolean
    placeholder: string
    type?: "text" | "email" | "password" | "url"
    register: any
    errors: any
    errorMessage?: string
    id: string
    required?: boolean
    isAutoComplete?: boolean
    label?: string
}

export const Input = ({
                          isLoading,
                          placeholder,
                          type = "text",
                          register,
                          errors,
                          errorMessage = "Ce champ est obligatoire !",
                          id,
                          required = true,
                          isAutoComplete = false,
                          label,
                      }: IProps) => {

    return (
        <div className="space-y-2">
            {label && (<Typography
                variant="caption4"
                component="div"
                theme={errors[id] ? "danger" : "gray"}
            >
                {label}</Typography>)}
            <div className="flex items-center">
                {type === "url" && (
                    <div className="p-4 text-gray-600 border-l border-gray-400 rounded-l bg-gray-500/40 border-y">
                        https://
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={clsx(
                        type === "url" ? "rounded-r" : "rounded",
                        isLoading && "cursor-not-allowed",
                        errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                        "w-full p-4 font-light border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary "
                    )}
                    disabled={isLoading}
                    {...register(id, {
                        required: {
                            value: required,
                            message: errorMessage,
                        },
                    })}
                    autoComplete={isAutoComplete ? "on" : "off"}
                />
            </div>
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    )
}