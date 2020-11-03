import { Fragment } from 'react';
import Head from 'next/head'
import Layout from './components/layouts/Layout'

export default function Cart() {
    return (
        <Fragment>
            <Head>
                <title>Cart | RajiaTnG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <h1>Cart</h1>
            </div>
        </Fragment>
    )
}

Cart.Layout = Layout;
