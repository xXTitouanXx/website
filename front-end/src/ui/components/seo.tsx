import Head from "next/head";

interface SeoProps {
    title?: string;
    description?: string;
}

export const Seo = ({title, description}: SeoProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}