import { useContext } from "react";
import {LoadingContext} from "../../contexts/LoadingContext";
import { Container } from './styles'




export function Spinner() {
    const { isLoading } = useContext(LoadingContext);

    return (
        <>
            {isLoading() && <Container></Container>}
        </>
    );
}
