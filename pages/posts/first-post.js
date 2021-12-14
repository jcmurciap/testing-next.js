import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../Layout/components/layout";

export default function FirstPost() {
    
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image
                src="/images/my_next-image.jpg"
                alt="my_profile"
                height={150}
                width={150}
            />
        </Layout>
    )     
};


