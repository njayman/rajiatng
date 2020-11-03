import { Fragment } from 'react'
import Head from 'next/head'
import Layout from './components/layouts/Layout'

export default function Checkout() {
    return (
        <Fragment>
            <Head>
                <title>Checkout | RajiaTnG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <h1>Checkout</h1>
            </div>
        </Fragment>
    )
}

Checkout.Layout = Layout;