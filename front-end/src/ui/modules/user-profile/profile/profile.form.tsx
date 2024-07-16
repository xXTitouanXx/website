import {FormType} from "@/types/form";
import {Button} from "@/ui/design-system/button/button";
import {Input} from "@/ui/design-system/form/input";
import {Textarea} from "@/ui/design-system/form/textarea";
import {UploadAvatar} from "@/ui/components/upload-avatar/upload-avatar";
import {Typography} from "@/ui/design-system/typography/typography";

interface Props {
    form: FormType
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
    imagePreview: string | ArrayBuffer | null
    uploadProgress: number
}

export const ProfileForm = ({form, handleImageSelect, imagePreview, uploadProgress}: Props) => {
    const {errors, register, handleSubmit, onSubmit, isLoading} = form
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <div className="flex items-center justify-between py-5">
                <UploadAvatar
                    variant="outline"
                    handleImageSelect={handleImageSelect}
                    imagePreview={imagePreview}
                    uploadProgress={uploadProgress}
                    isLoading={isLoading}
                />
                <div className="flex items-end gap-1">
                    <Typography variant="h1" component="div">0</Typography>
                    <Typography variant="caption4" component="div" theme="gray" className="mb-3">abonnés</Typography>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6 space-y-4">
                    <Input
                        label="Pseudo"
                        isLoading={isLoading}
                        placeholder="Exemple nom"
                        type="text"
                        register={register}
                        errors={{errors}}
                        id="displayName"
                        errorMessage="Tu dois renseigner un pseudo"
                    />
                    <Input
                        label="Spécialité"
                        isLoading={isLoading}
                        placeholder="Développeur React Freelance"
                        type="text"
                        register={register}
                        errors={{errors}}
                        id="expertise"
                        errorMessage="Tu dois renseigner ta spécialité"
                    />
                </div>
                <div className="col-span-6 space-y-4">
                    <Input
                        label="Linkedin"
                        isLoading={isLoading}
                        placeholder="linkedin.com/example"
                        type="url"
                        register={register}
                        errors={{errors}}
                        id="linkedin"
                        errorMessage="Tu dois indiquer ton profil linkedin"
                        required={false}
                    />
                    <Input
                        label="Github"
                        isLoading={isLoading}
                        placeholder="github.com/example"
                        type="url"
                        register={register}
                        errors={{errors}}
                        id="github"
                        errorMessage="Tu dois indiquer ton profil github"
                        required={false}
                    />
                </div>
            </div>
            <Textarea
                label="Biographie"
                rows={10}
                isLoading={isLoading}
                placeholder="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner ta biographie"
                id="biography"
                required={false}
            />
            <div className="flex justify-end">
                <Button isLoading={isLoading} type="submit">
                    Enregistrer
                </Button>
            </div>
        </form>
    )
}