export default function BuyButton({itemIncrease, cps, setCps}) {

    return (
        <>
            <button onClick={() => {
                setCps(cps + itemIncrease)
                }}>Buy!
            </button>
        </>
    )
}
