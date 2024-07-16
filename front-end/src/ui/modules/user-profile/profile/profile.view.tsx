import {ProfileForm} from "@/ui/modules/user-profile/profile/profile.form";
import {Typography} from "@/ui/design-system/typography/typography";
import {FormType} from "@/types/form";

interface Props {
    form: FormType
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
    imagePreview: string | ArrayBuffer | null
    uploadProgress: number
}

export const ProfileView = ({form, handleImageSelect, imagePreview, uploadProgress}: Props) => {
    return (
        <div className="space-y-5">
            <Typography variant="h1" component="h1">
                Mon compte
            </Typography>
            <ProfileForm
                handleImageSelect={handleImageSelect}
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                form={form}/>
        </div>
    )
}