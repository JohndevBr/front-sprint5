import styled from "styled-components";

export const Alert = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 20%;
    padding: 20px;
    background-color: #f44336; /* Red */
    color: white;
    margin-bottom: 15px;
    z-index: 1;
`;

export const CloseBtn = styled.span`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: black;
    }
`;