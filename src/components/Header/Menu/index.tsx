import { useContext } from "react"
import { CategoriesContext } from "../../../contexts/CategoriesContext"
import { MenuItem } from "./MenuItem"

export function Menu() {
    const categories = useContext(CategoriesContext)

    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
              {categories.map(categorie => {
                return (
                    <MenuItem key={categorie.id} link={categorie.link} label={categorie.label} />
                )
              })}  
            </ul>
        </nav>
    )
}
