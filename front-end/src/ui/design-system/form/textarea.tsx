import {Typography} from "@/ui/design-system/typography/typography";
import clsx from "clsx";

interface Props {
    isLoading: boolean
    placeholder: string
    rows?: number
    register: any
    errors: any
    errorMessage?: string
    id: string
    required?: boolean
    isAutoComplete?: boolean
    label?: string
}

export const Textarea = ({
                             isLoading,
                             placeholder,
                             rows = 5,
                             register,
                             errors,
                             errorMessage = "Ce champ est obligatoire !",
                             id,
                             required = true,
                             isAutoComplete = false,
                             label,
                         }: Props) => {
    return (
        <div className="space-y-2">
            {label && (<Typography
                variant="caption4"
                component="div"
                theme={errors[id] ? "danger" : "gray"}
            >
                {label}</Typography>)}
            <textarea
                rows={rows}
                placeholder={placeholder}
                className={clsx(
                    isLoading ? "bg-gray-300 focus:bg-gray-300 cursor-not-allowed" : "bg-white",
                    errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                    "w-full p-4 font-light border rounded focus:ring-1 focus:ring-primary border-gray-400"
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
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    )
}