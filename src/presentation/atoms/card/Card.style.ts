import styled from "styled-components";

export const ContainerCard = styled.div<{ border: string }>`
    width: 20rem; 
    margin-bottom: 2rem;
    background-color:#fff;
    cursor: pointer;
    border-radius: 1rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    position: relative;
    border: 5px solid transparent; 
    border-image-slice: 1;
    border-color: ${props => props.border};
    
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(255, 0, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.6);
    }

    .pokemon-image {
        display: block;
    }

    @media (max-width: 768px) {
        .pokemon-image {
            display: none;  
        }
    }
`;

export const ContainerImage = styled.div<{ backgroundColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    width: 100%;
    height: 100%;
    border-radius: .5rem 10rem ;
`;

export const ContainerDetails = styled.div<{ backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
    text-align: center;
    color:white;

    padding: 1rem;
    background-color: ${props => props.backgroundColor};
    width: 100%;
    height: 100%;
    border-radius: .5rem 10rem ;
`;
export const Abilities =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
`;
export const ContainerAbilities =  styled.div<{ border: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color:${props => props.border};
    width: 8rem;
    border-radius: 1rem;
    background-color: white;
    border: .2rem ${props => props.border} solid;
`;