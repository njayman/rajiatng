export default function Card({ product }) {
    return (
        <div className="card">
            <div className="card__image__container"><img className="card__image" src={product?.imageurl} alt={product?.name} /></div>
            <div className="card__body">
                <p className="name">{product?.name}</p>
                <p className="quantity">{product?.quantity} {product?.unit}</p>
                <p className="price">{product?.price} taka <del>{product?.fakeprice} taka</del></p>
                <button value={product?._id}>View Details</button>
                <button value={product?._id}>Add to cart</button>
            </div>
        </div>
    )
}
