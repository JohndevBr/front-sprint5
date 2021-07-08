import { GlobalStyle } from './styles/global'
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { Footer } from './components/Footer';
import { Message } from './components/Message';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { MessageContext } from './contexts/MessageContext';
import { FilterItemContext } from './contexts/FilterItemContext';

import { ProductsProvider } from './contexts/ProductsContext';
import { FiltersProvider } from './contexts/FiltersContext';
import { LoadingContext } from './contexts/LoadingContext';
import useLoading from './hooks/useLoading';

import Routes from './routes'
import { useState } from 'react';

interface Spinnerloading {
    addRequest: () => number;
    removeRequest: () => number;
    isLoading: () => boolean;
  }

function App() {
    const [addRequest, removeRequest, isLoading] = useLoading<Spinnerloading>({ addRequest: () => 0, removeRequest: () => 0, isLoading: () => false });
    const [message, setMessage] = useState('');
    const [filter, setFilter] = useState('');

    return (
        <FiltersProvider>
            <FilterItemContext.Provider value={{filter, setFilter}}>
            <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
                <MessageContext.Provider value={{ message, setMessage }}>
                <CategoriesProvider>
                    <Spinner />
                    <Message />
                    <ProductsProvider>
                    <Header />
                    <Routes />
                    <Footer />
                    <GlobalStyle />
                    </ProductsProvider>
                </CategoriesProvider>
                </MessageContext.Provider>
            </LoadingContext.Provider>
            </FilterItemContext.Provider>
        </FiltersProvider>
  );
}

export default App;


