import { useContext } from 'react'
import { FiltersContext } from '../../../contexts/FiltersContext'


interface FiltersProps {
    label: string
}

function FilterItem({label}: FiltersProps) {
    return (
        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="assets/filter.svg" alt="filtro" />
        </li>
    );
}

export function Filters() {
    const filters = useContext(FiltersContext)
    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map(filter => <FilterItem key={filter.id} label={filter.label} />)}
            </ul>
        </section>
    );
}