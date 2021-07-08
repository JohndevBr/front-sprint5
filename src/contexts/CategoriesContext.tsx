import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from '../services/api'

interface Categorie {
    id: number
    link: string
    label: string
}

interface CategoriesProviderProps {
    children: ReactNode //ReactNode aceita qualquer conteúdo válido pro React
}

export const CategoriesContext = createContext<Categorie[]>([])
// no createContext nós passamos o valor que o contexto irar iniciar 


export function CategoriesProvider({children}: CategoriesProviderProps) {
    const [categories, setCategories] = useState<Categorie[]>([])

    useEffect( () => {
        api.get('categories')
        .then(response => setCategories(response.data.categories))
        
    }, [])

    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    )
}