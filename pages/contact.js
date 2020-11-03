import { Fragment } from 'react'
import Head from 'next/head'
import Layout from './components/layouts/Layout'

export default function Contact() {
    return (
        <Fragment>
            <Head>
                <title>Contact us | RajiaTnG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="contact">
                <h1>Contact</h1>
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </Fragment>
    )
}

Contact.Layout = Layout;