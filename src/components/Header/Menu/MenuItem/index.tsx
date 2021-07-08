interface MenuProps {
    link: string
    label: string
}

export function MenuItem({link, label} : MenuProps) {
    return(
        <li  className="menu__item">
            <a className="menu__link" href={link}>
                <span>{label}</span>
            </a>
        </li>
    )
}