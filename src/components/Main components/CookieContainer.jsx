import { useEffect } from "react"

export default function CookieContainer({cookies, setCookies, cps}) {
    
    useEffect(() => {
        const cookieCounter = setInterval(() => {
            setCookies(currentCookies => currentCookies + cps)
        }, 1000)

        localStorage.setItem('cps', JSON.stringify(cps))

        return () => {
            clearInterval(cookieCounter)
        }
    }, [cps])

    useEffect(() => {
        localStorage.setItem('cookies', JSON.stringify(cookies))
    }, [cookies])

  
    return (
        <section className="cookieContainer">
            <div className="mainText">
                <h1>Users Bakery</h1>
                <div className="cookieText">
                    <p>Donuts: {cookies + cps}</p>
                    <p>Donuts/sec: {cps}</p>
                </div>
            </div>
            <img  className="rotate" onClick={() => setCookies(cookies + 1)}  src="https://cdn-icons-png.flaticon.com/128/2821/2821785.png" alt="" />
        </section>
    )
}