import {FormType} from "@/types/form";
import {Input} from "@/ui/design-system/form/input";
import {Textarea} from "@/ui/design-system/form/textarea";

interface Props {
    form: FormType
}

export const ProfileStepForm = ({form}: Props) => {
    const {register, errors, isLoading} = form
    return (
        <form className="w-full max-w-md space-y-4">
            <Input
                label="Pseudo"
                isLoading={isLoading}
                placeholder="Alexandre Dubois"
                type="text"
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner un pseudo"
                id="displayName"
            />
            <Input
                label="Spécialité"
                isLoading={isLoading}
                placeholder="Développeur front-end ..."
                type="text"
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner une spécialité"
                id="expertise"
            />
            <Textarea
                label="Biographie"
                isLoading={isLoading}
                placeholder="Indique une courte description de toi et ton parcours..."
                rows={5}
                register={register}
                errors={errors}
                //errorMessage="Tu dois renseigner une biographie"
                id="biography"
                required={false}
            />
        </form>
    )
}