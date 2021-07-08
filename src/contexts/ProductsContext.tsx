import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'
import { LoadingContext } from "../contexts/LoadingContext";
import { MessageContext } from "../contexts/MessageContext"

interface Product {
    sku: number
    image: string
    name: string
    price: string
}

interface ProductsProviderProps {
    children: ReactNode //ReactNode aceita qualquer conteúdo válido pro React
}

export const ProductsContext = createContext<Product[]>([])
// no createContext nós passamos o valor que o contexto irar iniciar 


export function ProductsProvider({children}: ProductsProviderProps) {
    const [products, setProducts] = useState<Product[]>([])
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    useEffect( () => {
        addRequest()
        api.get('products')
        .then(response => {
            setProducts(response.data.products)
        })
        .catch((error) => {setMessage("Erro ao carregar produtos")})
        .finally(() => removeRequest())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}