import { useState } from "react"
import ShopContainer from "./Main components/ShopContainer"
import CookieContainer from "./Main components/CookieContainer"

export default function Main() {
    
    const storedCps = parseInt(localStorage.getItem('cps'))
    const storedCookies = parseInt(localStorage.getItem('cookies'))

    const [cookies, setCookies] = useState(storedCookies || 100)
    const [cps, setCps] = useState(storedCps || 1)
    
    return(
        <main>
            <ShopContainer cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps}/>
            <CookieContainer cookies={cookies} setCookies={setCookies} cps={cps}/>
        </main>
    )
}

/*GOALS
-Style top half of page
-Other general styling and animation
-Switch API to donut api
-Add sound effects with controls
-Leaderboard?
*/