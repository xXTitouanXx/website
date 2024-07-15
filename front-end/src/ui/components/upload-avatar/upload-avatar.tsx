import {RiCamera2Fill} from "react-icons/ri";
import {Avatar} from "@/ui/design-system/avatar/avatar";
import clsx from "clsx";
import {useAuth} from "@/context/AuthUserContext";

interface IProps {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null
    uploadProgress: number
    isLoading: boolean
}

export const UploadAvatar = ({
                                 handleImageSelect,
                                 imagePreview,
                                 uploadProgress,
                                 isLoading
                             }: IProps) => {
    const {authUser} = useAuth()
    const uploadProgressBarStyle = `fixed left-0 top-0 w-full h-1 bg-secondary animate ${uploadProgress > 0 ? "" : "hidden"}`
    return (
        <div className="flex items-center gap-5">
            <div className={uploadProgressBarStyle} style={{width: `${uploadProgress}%`}}/>
            <label
                className={clsx(
                    isLoading ? "cursor-not-allowed" : "cursor-pointer",
                    "inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption2 font-medium animate"
                )}>
                <div className="flex items-center gap-2">
                    <RiCamera2Fill/>
                    <span>Choisir un fichier</span>
                </div>
                <input type="file" disabled={isLoading} className="hidden" onChange={handleImageSelect}/>
            </label>
            <Avatar size="extra-large"
                    src={
                        imagePreview
                            ? typeof imagePreview === "string"
                                ? imagePreview
                                : String(imagePreview)
                            : authUser.userDocument.photoURL ? authUser.userDocument.photoURL
                                : "/assets/svg/camera.svg"
                    }
                    alt="Avatar"
                    isLoading={isLoading}
            />
        </div>
    )
}