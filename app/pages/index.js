import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Secret messages</p>
        <p>
          Sample of website is here{''}
          <Link href="/api/createMessage">
            <a>create message</a>
          </Link>
        </p>
        <p>
          <Link href="/api/getMessage">
            <a>get message</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}


