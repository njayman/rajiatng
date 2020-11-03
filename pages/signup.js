import { Fragment } from 'react'
import Head from 'next/head'
import Layout from './components/layouts/Layout'

export default function Signup() {
    return (
        <Fragment>
            <Head>
                <title>Sign up | RajiaTnG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <h1>Sign up</h1>
            </div>
        </Fragment>
    )
}

Signup.Layout = Layout;
