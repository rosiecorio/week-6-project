import { useEffect } from "react"

export default function CookieContainer({cookies, setCookies, cps}) {
    
    useEffect(() => {
        const cookieCounter = setInterval(() => {
            setCookies(currentCookies => currentCookies + 1)
        }, 1000)
        return () => {
            clearInterval(cookieCounter)
        }
    }, [])


/* need to add sps tp currentCookies. */


    return (
        <section className="cookieContainer">
            <div>
                <p>Donuts: {cookies}</p>
                <p>Donuts p/s: {cps}</p>
            </div>
            <img  className="rotate" onClick={() => setCookies(cookies + 1)}  src="./src/assets/donut.png" alt="" />
        </section>
    )
}