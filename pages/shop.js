import { Fragment } from 'react'
import Head from 'next/head'
import Layout from './components/layouts/Layout'
import axios from 'axios'
import Card from './components/partials/Card'

const Shop = ({ products }) => {
    return (
        <Fragment>
            <Head>
                <title>Shop | RajiaTnG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="products">
                <h1>Shop : Our products</h1>
                <div className="product-container">{products?.map((product, id) => (
                    <Card key={id} product={product} />
                ))}</div>
            </div>
        </Fragment>
    )
}

Shop.Layout = Layout;

export async function getStaticProps() {
    const { data: products } = await axios.get(`${process.env.AXIOS_BASE_URL}/api/products`)

    return {
        props: {
            products: products
        }
    }
}
export default Shop;