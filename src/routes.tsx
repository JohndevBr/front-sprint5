import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

import { ProductsPage } from './pages/Productspage';
import { SelectedProduct } from './pages/SelectedProduct';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ProductsPage} />
                <Route path="/produto/:id" component={SelectedProduct} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}