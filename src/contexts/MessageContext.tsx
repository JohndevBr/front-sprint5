import {createContext} from 'react'

interface Message{

    message: string;
    setMessage: (arg: string) => void;
}

export const MessageContext = createContext<Message>({message: '', setMessage: () => ''});

