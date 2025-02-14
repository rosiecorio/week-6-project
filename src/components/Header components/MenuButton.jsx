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

    return (
        <>
            <button className="menuButton" onClick={toggleModal}>☰</button>
            {showModal ? <section className="modalMenu">
                <div className="modalContainer">
                    <h1 className="upgradesButton" onClick={toggleUpgrades}>Upgrades</h1>
                    {showUpgrades? <div className="upgradeModalContainer">
                        <p>{upgrades}</p>
                    </div> : ''}
                    <button className="closeMenuButton" onClick={toggleModal} >X</button>
                </div>
            </section> : ''}
        </>
    )
}