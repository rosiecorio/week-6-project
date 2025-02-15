import MenuButton from "./Header components/MenuButton"

export default function Header({bought}) {
    return (
        <header> 
            <MenuButton bought={bought}/>
        </header>
    )
}