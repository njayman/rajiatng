import { useRouter } from 'next/router'

export default function Card({ product }) {
    const router = useRouter()
    return (
        <div className="card">
            <div className="card__body">
                <img className="card__image" src={product?.imageurl} alt={product?.name} />
                <h3 className="card__name">{product?.name}</h3>
                <p className="card__quantity">{product?.quantity} {product?.unit}</p>
                <p className="card__price">{product?.price} taka {product?.fakeprice ? <del>{product?.fakeprice} taka</del> : null}</p>
                <button className="card__btn" value={product?._id} onClick={e => router.push(`/products/${e.target.value}`)}>View Details</button>
                <button className="card__btn" value={product?._id}>Add to cart</button>
            </div>
        </div>
    )
}
