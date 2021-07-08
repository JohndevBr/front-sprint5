import { useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container, Content } from './styles'

import { MessageContext } from "../../contexts/MessageContext";
import { api } from '../../services/api';
import { first } from "lodash"

interface Product {
    sku: number;
    image: string;
    name: string;
    price: string;
}

interface ParamsProps {
    id: string;
}

interface ResponseProps {
    data: {
        products: [Product]
    }
}

export function SelectedProduct(){
    const { params } = useRouteMatch<ParamsProps>();
    const [product, setProduct] = useState<Product>();
    const [selectedValue, setSelectedValue]= useState("4");
    const { setMessage } = useContext(MessageContext);
    const [select] = useState(["4", "6", "8", "10"]);

    function handleAddcart() {
        setMessage("Produto adicionado ao Carrinho")
    };

    useEffect( () => {
        api.get('products')
        .then((response: ResponseProps) => {
            setProduct(first(response.data.products.filter((product: Product) => product.sku === Number(params.id))))
        })
        .catch((error) => {setMessage("Erro ao carregar produto")})
    }, [ params.id, setMessage ]);

    return(
        <Container>
             <img src={`${window.location.origin}/${product?.image}`} alt="Camisa"/>
            <Content>
                <h2>{product?.name}</h2>
                <div className="product-size">
                    <div>
                    <p>Selecionar Tamanho: <span>{selectedValue}</span></p>
                    </div>
                    <ul onClick={(e: any)=>setSelectedValue(e.target?.innerText?.length > 2 ? "4" : e.target?.innerText)}>
                        {select.map((value)=> (
                            <li className={selectedValue === value ? "selected" : ""}>{value}</li>
                        ))}
                    </ul>
                </div>
                <div className="price-content">
                    <h2>R$ {product?.price}</h2>
                    <div className="price-button">
                        <button > <a onClick={handleAddcart}  href="/">Adicionar à Sacola</a></button>
                        <button> <a href="/">Cancelar</a></button>
                    </div>
                </div>
            </Content> 
        </Container>
    )
}