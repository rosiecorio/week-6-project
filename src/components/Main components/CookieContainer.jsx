import { useEffect } from "react"

export default function CookieContainer({cookies, setCookies, cps}) {
    
    useEffect(() => {
        const cookieCounter = setInterval(() => {
            setCookies(currentCookies => currentCookies + cps)
        }, 1000)
        return () => {
            clearInterval(cookieCounter)
        }
    }, [cps])

  
    return (
        <section className="cookieContainer">
            <div>
                <p>Donuts: {cookies + cps}</p>
                <p>Donuts p/s: {cps}</p>
            </div>
            <img  className="rotate" onClick={() => setCookies(cookies + 1)}  src="./src/assets/8bitdonut.png" alt="" />
        </section>
    )
}