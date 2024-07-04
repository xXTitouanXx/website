import {Container} from "@/ui/components/container";
import Image from "next/image";
import {Box} from "@/ui/design-system/box/box";
import {Typography} from "@/ui/design-system/typography/typography";
import Link from "next/link";
import {RegisterForm} from "@/ui/modules/authenfication/register/register.form";
import React from "react";
import {ForgetPasswordForm} from "@/ui/modules/authenfication/forget-password/forget-password.form";

export const ForgetPasswordView = () => {
    return        (
        <Container className="grid grid-cols-2 gap-20 mb-32">
        <div className="flex items-center">
            <div className="relative w-full h-[531px]">
                <Image fill src="/assets/images/character-3.png" alt="Bonhomme de mot de passe oublié"
                       className="object-scale-down"/>
            </div>
        </div>
        <div className="flex items-center">
            <Box padding_y="py-5">
                <div className="flex items-center justify-between">
                    <Typography variant="h5" component="h1">
                        Mot de passe oublié ?
                    </Typography>
                        <Typography variant="caption4" component="span" theme="primary">
                            <Link href="/connexion">Connexion</Link>
                        </Typography>
                </div>
                <div>
                    <ForgetPasswordForm/>
                </div>
            </Box>
        </div>
    </Container>
    )
};