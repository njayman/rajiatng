import { Fragment } from 'react'
import Head from 'next/head'
import Layout from './components/layouts/Layout'

export default function About() {
    return (
        <Fragment>
            <Head>
                <title>About | RajiaTnG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <h1>About</h1>
            </div>
        </Fragment>
    )
}

About.Layout = Layout;