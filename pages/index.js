import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
//import styles from '../styles/Home.module.scss'
//import axios from 'axios'
import Layout from './components/layouts/Layout'

export default function Home() {
  const router = useRouter()
  return (
    <Fragment>
      <Head>
        <title>Rajia Treat n Groceries</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="home">
        <div className="hero">
          <div className="hero-card">
            <h4>Rajia Treat and Groceries</h4>
            <button className="btn" onClick={() => router.push("/products")}>Order now</button>
          </div>
          <div className="hero-slide">
            <div className="hero-product-card">

            </div>
          </div>
        </div>
        <div className="notice">
          <h1>Opening soon</h1>
          <p>Browse our <Link href="/products"><a style={{ color: "blue" }}>shop</a></Link>. You can order by calling <Link href="tel:+8801711842891"><a style={{ color: "blue" }}>+8801711842891</a></Link>.</p>
        </div>
      </div>
    </Fragment>
  )
}

Home.Layout = Layout;
