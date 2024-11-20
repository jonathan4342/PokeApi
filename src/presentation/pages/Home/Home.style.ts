import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #0F0F0F;
    height: 100vh;
`;

export const ContainerDetails = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    gap: 2rem; 
    width: 90%; 
    max-width: 1200px; 
    height: 60%;
`;

export const Pagination =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 4rem;
    gap:1rem;
    width: 20rem;
`;