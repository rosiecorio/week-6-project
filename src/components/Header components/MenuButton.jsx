import { useState } from "react"

export default function MenuButton({bought}) {
    const [showModal, setShowModal] = useState(false)
    
    function toggleModal() {
        setShowModal(!showModal)
    }

    const[showUpgrades, setShowUpgrades] = useState(false)  
    
    function toggleUpgrades() {
        setShowUpgrades(!showUpgrades)
    }

    const [showAudio, setShowAudio] = useState(false)

    function toggleAudio() {
        setShowAudio(!showAudio)
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
       <p key={upgrade}>{upgrade}s bought: {bought}</p>
    )    
    })

    const audioArray = [
        "Play",
        "Pause",
        "Stop"
    ]

    const audio = audioArray.map((item) => {
        return (
            <button key={item}>{item}</button>
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
                        <div>{upgrades}</div>
                    </div> : ''}
                    <button className="closeMenuButton" onClick={toggleModal} >X</button>
                    <h1 className="upgradesButton" onClick={toggleAudio}>Audio</h1>
                    {showAudio ? <div className="upgradeModalContainer audioControls">{audio}</div> : ''}
                    <h1 className="upgradesButton" onClick={toggleCredits}>Credits</h1>
                    {showCredits ? <div className="upgradeModalContainer">{credits}</div> : ''}
                </div>
            </section> : ''}
        </>
    )
}