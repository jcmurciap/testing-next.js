import Head from 'next/head';
import Layout, {siteTitle} from '../Layout/components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I'm a industrial and Software engineer</p>
                <p>
                  This is my first website using {' '}
                      <a href="https://nextjs.org/learn">Next.js</a> {' '}
                  React framework
                </p>
            </section>
          </Layout>
    )
}