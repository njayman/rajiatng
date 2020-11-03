import { Fragment, useState, useEffect } from 'react';
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

export default function Layout({ children }) {
    const [navHeight, setNavHeight] = useState(0)
    const [footHeight, setFootHeight] = useState(0)
    const [bodyHeight, setBodyHeight] = useState(0)

    useEffect(() => {
        setBodyHeight(navHeight + footHeight)
    }, [footHeight, navHeight])

    return (
        <Fragment>
            <Navbar setNavHeight={navht => setNavHeight(navht)} />
            <div className="body" style={{ minHeight: `calc(100vh - ${bodyHeight}px)` }}>
                {children}
            </div>
            <Footer setFootHeight={footht => setFootHeight(footht)} />
        </Fragment>
    )
}
