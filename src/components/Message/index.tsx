import { useContext } from "react";
import {Alert, CloseBtn} from './styles'

import { MessageContext } from "../../contexts/MessageContext";



export function Message() {
    const { message, setMessage } = useContext(MessageContext);

    return (
        <>
            {message &&
                <Alert>
                    <CloseBtn onClick={() => setMessage("")} >&times;</CloseBtn>
                    {message}
                </Alert>
            }
        </>
    );
}

