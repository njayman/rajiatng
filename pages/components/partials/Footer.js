import { useEffect, useRef } from 'react';
import Link from 'next/link'

export default function Footer({ setFootHeight }) {
    const heightRef = useRef(null)
    useEffect(() => {
        if (heightRef.current) {

            let footerheight = heightRef.current.offsetHeight;
            setFootHeight(footerheight)

        }
    }, [heightRef, setFootHeight])
    return (
        <div ref={heightRef} className="footer">
            <p>© 2020 - <Link href="/"><a>RajiaTNG.</a></Link> Powered by : <Link href="https://njayman.tech"><a target="_blank">njayman.tech</a></Link></p>
        </div>
    )
}
