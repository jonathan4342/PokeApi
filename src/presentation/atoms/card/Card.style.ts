import styled from "styled-components";

export const ContainerCard = styled.div<{ border: string; isSelected: boolean }>`
    width: 20rem;
    height: 25rem;
    margin-bottom: 2rem;
    perspective: 1000px; 
    cursor: pointer;
    border-color: ${props => props.border};
    .pokemon-image {
        display: block;
    }

    @media (max-width: 768px) {
        .pokemon-image {
            display: none;  
        }
    }
`;

export const CardInner = styled.div<{ isSelected: boolean,border: string;  }>`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${({ isSelected }) => (isSelected ? "rotateY(-180deg)" : "rotateX(0)")};
    border-color: ${props => props.border};
`;

export const CardFront = styled.div<{ backgroundColor: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; 
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CardBack = styled.div<{ backgroundColor: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Oculta el frente */
    transform: rotateY(-180deg);
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ContainerImage = styled.div<{ backgroundColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
`;

export const ContainerDetails = styled.div<{ backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
    text-align: center;
    color:white;
    border-radius: 1rem ;

    padding: 1rem;
    background-color: ${props => props.backgroundColor};
    width: 100%;
    height: 100%;
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