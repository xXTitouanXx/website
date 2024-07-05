import {Container} from "@/ui/components/container";
import Image from "next/image";
import {Box} from "@/ui/design-system/box/box";
import {Typography} from "@/ui/design-system/typography/typography";
import Link from "next/link";
import React from "react";
import {LoginForm} from "@/ui/modules/authenfication/login/login.form";
import {FormType} from "@/types/form";

interface LoginViewProps {
    form: FormType
}

export const LoginView = ({form}: LoginViewProps) => {
    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image fill src="/assets/images/character-2.png" alt="Bonhomme de connexion"
                           className="object-scale-down"/>
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Connexion
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption4" component="span" theme="gray">
                                tu n'as pas de compte ?
                            </Typography>
                            <Typography variant="caption4" component="span" theme="primary">
                                <Link href="/connexion/inscription">S'inscrire</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form}/>
                    <Typography variant="caption4" component="span" theme="primary">
                        <Link href="/connexion/mot-de-passe-oublie" className="flex justify-center">Mot de passe oublié
                            ?</Link>
                    </Typography>
                </Box>
            </div>
        </Container>
    )
};