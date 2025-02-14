import { useState } from "react"

export default function MenuButton() {
    const [showModal, setShowModal] = useState(false)
    
    function toggleModal() {
        setShowModal(!showModal)
    }

    const[showUpgrades, setShowUpgrades] = useState(false)  
    
    function toggleUpgrades() {
        setShowUpgrades(!showUpgrades)
    }

    const [showCredits, setShowCredits] = useState(false)

    function toggleCredits() {
        setShowCredits(!showCredits)
    }

    const upgradesArray = [
        "Auto-clicker", 
        "Enhanced Oven", 
        "Cookie Farm",
        "Robot Baker",
        "Cookie Factory",
        "Magic Flour",
        "Time Machine",
        "Quantum Oven",
        "Alien Technology",
        "Interdimensional Baker"
    ]

    const upgrades = upgradesArray.map((upgrade) => {
        return (
       <p key={upgrade}>{upgrade}s bought:</p>
    )
        
    })

    const creditsArray = [
        "Rosie is the best",
        "Angelica is cool too"
    ]

    const credits = creditsArray.map((credit) => {
        return (
            <p key={credit}>{credit}</p>
        )
    })

    return (
        <>
            <button className="menuButton" onClick={toggleModal}>☰</button>
            {showModal ? <section className="modalMenu">
                <div className="modalContainer">
                    <h1 className="upgradesButton" onClick={toggleUpgrades}>Upgrades</h1>
                    {showUpgrades ? <div className="upgradeModalContainer">
                        <p>{upgrades}</p>
                    </div> : ''}
                    <button className="closeMenuButton" onClick={toggleModal} >X</button>
                    <h1 className="upgradesButton">Audio</h1>
                    <h1 className="upgradesButton" onClick={toggleCredits}>Credits</h1>
                    {showCredits ? <div className="upgradeModalContainer">
                        <p>{credits}</p>
                    </div> : ''}
                </div>
            </section> : ''}
        </>
    )
}