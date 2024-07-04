import {FormType} from "@/types/form";
import {Button} from "@/ui/design-system/button/button";
import {Input} from "@/ui/design-system/form/input";

interface RegisterFormProps {
    form: FormType
}

export const RegisterForm = ({form}: RegisterFormProps) => {
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
            <Input
                isLoading={isLoading}
                placeholder="Mot de passe"
                type="password"
                register={register}
                errors={errors}
                id="password"
            />
            <Input
                isLoading={isLoading}
                placeholder="Comment nous avez-vous ..."
                register={register}
                errors={errors}
                id="hear"
            />
            <Button isLoading={isLoading} type="submit" fullWith>S'inscrire</Button>
        </form>
    );
}