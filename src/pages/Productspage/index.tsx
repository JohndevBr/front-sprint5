import { useContext } from "react"
import { Link} from 'react-router-dom'
import { Filters } from './Filters'
import { ProductsContext } from "../../contexts/ProductsContext"
import { FilterItemContext } from "../../contexts/FilterItemContext"


interface ProductProps {
    image: string
    name: string
    price: string
    id: number
}

function Product({ image, name, price, id }: ProductProps) {
    return (
        
        <Link to={`/produto/${id}`} className="products__card card" >
            <div className="card">
                <img className="card__img" src={image} alt="" />
                <p className="card__description">
                    {name}
                </p>
                <p className="card__price">
                    R$ {price}
                </p>
            </div>
        </Link>
    );
}

export function ProductsPage(){
    const products = useContext(ProductsContext)
    const { filter } = useContext(FilterItemContext);
    console.log(products)
    return (
        <main className="main">
        <Filters />
        <section className="main__products products">
             <div className="products__row">
                <ol className="products__list">
                    {products
                    .filter(p =>
                        filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                    .map(product =>
                        <Product key={product.sku} image={product.image} name={product.name} price={product.price} id={product.sku} />
                        ).sort()
                    }
                </ol>
             </div>
        </section>
        </main>
    )
}