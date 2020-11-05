import { useEffect, useRef } from 'react';
import Link from 'next/link'

export default function Navbar({ setNavHeight }) {
    const heightRef = useRef(null)
    useEffect(() => {
        if (heightRef.current) {

            let navbarheight = heightRef.current.offsetHeight;
            setNavHeight(navbarheight)

        }
    }, [heightRef, setNavHeight])
    return (
        <div ref={heightRef} className="navbar">
            <div className="navbar__icon">
                <Link href="/">
                    <img src="/logo.svg" alt="logo" />
                </Link>
            </div>
            <div className="navbar__menu">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/products">
                    <a>Products</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/cart">
                    <a>Cart</a>
                </Link>
                <Link href="/checkout">
                    <a>Checkout</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                <Link href="/signup">
                    <a>Sign up</a>
                </Link>
            </div>
        </div>
    )
}
