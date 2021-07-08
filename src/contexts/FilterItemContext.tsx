  
import {createContext} from 'react';

interface Filter{

    filter: string;
    setFilter: (arg: string) => void;
}

export const FilterItemContext = createContext<Filter>({filter: '', setFilter: () => ''});
