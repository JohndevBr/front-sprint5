import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';
import './index.css';

createServer({
    models: {
        categorie: Model,
        product: Model,
        filter: Model
    },

    seeds(server) {
        server.db.loadData({
            categories: [
                {
                    "id": 1,
                    "label": "Novidades",
                    "link": "#home"
                },
                {
                    "id": 2,
                    "label": "Feminino",
                    "link": "#home"
                },
                {
                    "id": 3,
                    "label": "Masculino",
                    "link": "#home"
                },
                {
                    "id": 4,
                    "label": "Infantil",
                    "link": "#home"
                },
                {
                    "id": 5,
                    "label": "Moda Íntima",
                    "link": "#home"
                },
                {
                    "id": 6,
                    "label": "Calçados",
                    "link": "#home"
                },
                {
                    "id": 7,
                    "label": "Acessórios e Relógios",
                    "link": "#home"
                },
                {
                    "id": 8,
                    "label": "Beleza e Perfume",
                    "link": "#home"
                },
                {
                    "id": 9,
                    "label": "Casa Riachuelo",
                    "link": "#home"
                },
                {
                    "id": 10,
                    "label": "Eletrônicos",
                    "link": "#home"
                },
                {
                    "id": 11,
                    "label": "Personagens",
                    "link": "#home"
                },
                {
                    "id": 12,
                    "label": "Outlet",
                    "link": "#home"
                }
            ],
            products: [
                {
                    "sku": 1,
                    "image": "assets/c1.webp",
                    "name": "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
                    "price": "199,90"
                },
                {
                    "sku": 2,
                    "image": "assets/c2.webp",
                    "name": "Camiseta Infantil Manga Curta Super Mario Azul Tam 4 a 10",
                    "price": "39,90"
                },
                {
                    "sku": 3,
                    "image": "assets/c3.webp",
                    "name": "Camiseta Infantil Manga Curta Super Mario Branco Tam 4 a 10",
                    "price": "49,90"
                },
                {
                    "sku": 4,
                    "image": "assets/c4.webp",
                    "name": "Camiseta Infantil Manga Longa Super Mario Vermelho Tam 4 a 10",
                    "price": "49,90"
                },
                {
                    "sku": 5,
                    "image": "assets/c5.webp",
                    "name": "Camiseta Juvenil Manga Curta Mario Bros Cinza",
                    "price": "39,90"
                },
                {
                    "sku": 6,
                    "image": "assets/c6.webp",
                    "name": "Camiseta Juvenil Manga Curta Super Mario Azul Tam 10 a 18",
                    "price": "39,90"
                },
                {
                    "sku": 7,
                    "image": "assets/c7.webp",
                    "name": "Regata Infantil Mario Bros Branco Tam 4 a 10",
                    "price": "29,90"
                },
                {
                    "sku": 8,
                    "image": "assets/c8.webp",
                    "name": "Camiseta Juvenil Manga Curta Super Mario Branco Tam 10 a 18",
                    "price": "49,90"
                },
                {
                    "sku": 9,
                    "image": "assets/c9.webp",
                    "name": "Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10",
                    "price": "39,90"
                },
                {
                    "sku": 10,
                    "image": "assets/c10.webp",
                    "name": "Blusa de Moletom Juvenil com Capuz Mario Bros Cinza Mescla Tam 10 a 16",
                    "price": "149,90"
                },
                {
                    "sku": 11,
                    "image": "assets/c11.webp",
                    "name": "Camiseta Infantil Manga Curta Mario Bros Vermelho Tam 4 a 10",
                    "price": "49,90"
                },
                {
                    "sku": 12,
                    "image": "assets/c12.webp",
                    "name": "Camiseta Infantil Manga Curta Mário Bros Vermelha Tam 4 a 10",
                    "price": "39,90"
                }
            ],
            "filters": [
                {
                    "id": "size",
                    "label": "Tamanho"
                },
                {
                    "id": "color",
                    "label": "Cor"
                },
                {
                    "id": "department",
                    "label": "Departamento"
                },
                {
                    "id": "category",
                    "label": "Categoria"
                },
                {
                    "id": "sleeve",
                    "label": "Manga"
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api'

        this.get('/categories', () => {
            return this.schema.all('categorie')
        })

        this.get('/products', () => {
            return this.schema.all('product')
        })

        this.get('/filters', () => {
            return this.schema.all('filter')
        })

    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

