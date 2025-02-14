import { useState } from "react"
import ShopContainer from "./Main components/ShopContainer"
import CookieContainer from "./Main components/CookieContainer"

export default function Main() {
    
    const [cookies, setCookies] = useState(100)
    const [cps, setCps] = useState(1)
    
    return(
        <main>
            <ShopContainer cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps}/>
            <CookieContainer cookies={cookies} setCookies={setCookies} cps={cps}/>
        </main>
    )
}

/*GOALS
-Add local storage saves
-Style top half of page
-Create upgrades array with display
-Other general styling and animation
-Switch API to donut api
-Add sound effects with controls
-Leaderboard?
*/