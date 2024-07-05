import {Input} from "@/ui/design-system/form/input";
import {Button} from "@/ui/design-system/button/button";
import {FormType} from "@/types/form";

interface ForgetPasswordFormProps {
    form: FormType
}

export const ForgetPasswordForm = ({form}: ForgetPasswordFormProps) => {
    const {onSubmit, errors, isLoading, register, handleSubmit} = form
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
            <Input
                isLoading={isLoading}
                placeholder="example@example.com"
                type="email"
                register={register}
                errors={errors}
                id="email"
            />
            <Button isLoading={isLoading} type="submit" fullWith>Envoyer</Button>
        </form>
    );
}