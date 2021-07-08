import {createContext} from 'react'

interface Loading{

    addRequest: () => void;
    removeRequest: () => void;
    isLoading: () => boolean;
}

export const LoadingContext = createContext<Loading>({addRequest: () => 0, removeRequest: () => 0, isLoading: () => false});

