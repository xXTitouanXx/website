import {createContext, ReactNode, useContext} from "react";
import {UserDocument} from "@/types/user";
import useFirebaseAuth from "@/hooks/use-firebase-auth";

const init = {
    uid: "",
    email: "",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument,
}

interface AuthUserContextType {
    authUser: {
        uid: string;
        email: string;
        displayName: string;
        emailVerified: boolean;
        phoneNumber: string;
        photoURL: string;
        userDocument: UserDocument;
    };
    authUserIsLoading: boolean;
    reloadAuthUserData: () => void
}

const authUserContext = createContext<AuthUserContextType>({
    authUser: init,
    authUserIsLoading: true,
    reloadAuthUserData: () => {
    },
});

export function AuthUserProvider({children}: { children: ReactNode }) {
    const auth = useFirebaseAuth();

    return (
        <authUserContext.Provider
            value={{
                authUser: auth.authUser as {
                    uid: string;
                    email: string;
                    displayName: string;
                    emailVerified: boolean;
                    phoneNumber: string;
                    photoURL: string;
                    userDocument: UserDocument;
                },
                authUserIsLoading: auth.authUserIsLoading,
                reloadAuthUserData: auth.reloadAuthUserData,
            }}
        >
            {children}
        </authUserContext.Provider>
    );
}

export const useAuth = () => useContext(authUserContext);
