import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../components/layouts/Layout'

export default function Product() {
    const [product, setProduct] = useState()
    const router = useRouter()
    const { pid } = router.query

    const getproduct = async () => {
        try {
            const { data } = await axios.get(`${process.env.AXIOS_BASE_URL}/api/product/${pid}`)
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getproduct()
    }, [pid])

    useEffect(() => {
        console.log(product)
    }, [product])

    return (<div className="page">
        <div className="container">
            <div className="product__details">
                <div className="product__identity" >
                    <img src={product?.imageurl} alt={product?.name} />
                    <div className='product__info'>
                        <h1>{product?.name}</h1>
                        <p>{product?.quantity} {product?.unit}</p>
                        <p>{product?.price} taka {product?.fakeprice ? <del>{product?.fakeprice} taka</del> : null}</p>
                    </div>
                </div>
                <div className="product__description">
                    <div dangerouslySetInnerHTML={{ __html: product?.description }} style={{ flex: 2 }} />
                </div>
            </div>
        </div>
    </div>
    )
}

Product.Layout = Layout;

