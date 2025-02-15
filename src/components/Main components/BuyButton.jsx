export default function BuyButton({itemIncrease, cps, setCps, setCookies, cookies, cost}) {

    return (
        <>
            <button onClick={() => {
                {cookies < cost ? alert('You dont have enough donuts') : 
                setCps(cps + itemIncrease)
                setCookies(currentCookies => currentCookies + cps)
                setCookies(currentCookies => currentCookies - cost)
                }}}>Buy!
            </button>
        </>
    )
}

/* add function to add 1 to upgrades array every time 
buy button is clicked*/

/*setBought(bought => bought + 1)}*/
