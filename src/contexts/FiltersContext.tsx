import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from '../services/api'

interface Filter {
    id: string
    label: string
    
}

interface FiltersProviderProps {
    children: ReactNode //ReactNode aceita qualquer conteúdo válido pro React
}

export const FiltersContext = createContext<Filter[]>([])
// no createContext nós passamos o valor que o contexto irar iniciar 


export function FiltersProvider({children}: FiltersProviderProps) {
    const [filters, setFilters] = useState<Filter[]>([])

    useEffect( () => {
        api.get('filters')
        .then(response => setFilters(response.data.filters))
        
    }, [])

    return (
        <FiltersContext.Provider value={filters}>
            {children}
        </FiltersContext.Provider>
    )
}