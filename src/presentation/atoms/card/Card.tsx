import { useState } from "react";
import { Img } from "../img/Img"
import { CardProps } from "./Card.interface"
import { Abilities, CardBack, CardFront, CardInner, ContainerAbilities, ContainerCard, ContainerImage,ContainerDetails } from "./Card.style";


export const Card = ({ details }: CardProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const types = details.getTypes();
    const backgroundColor = getBackgroundColor(types);
    
    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <ContainerCard
            role="button"
            border={backgroundColor}
            isSelected={isSelected}
            onClick={handleClick}
        >
            <CardInner isSelected={isSelected} border={backgroundColor} >
                <CardFront backgroundColor={backgroundColor}>
                    <ContainerImage backgroundColor={backgroundColor}>
                        <Img src={details.getImage()} height="15rem" width="15rem" />
                    </ContainerImage>
                    <h1>{details.getName()}</h1>
                </CardFront>
                <CardBack backgroundColor={backgroundColor}>
                    <ContainerDetails backgroundColor={backgroundColor}>
                        <p>Height: {details.getHeight() / 10} M</p>
                        <p>Weight: {details.getWeight() / 10} Kg</p>
                        <p>Types: {details.getTypes().join(", ")}</p>
                        <p>Abilities:</p>
                        <Abilities>
                            {details.getAbilities().map((e, index) => (
                                <ContainerAbilities key={index} border={backgroundColor}>
                                    {e}
                                </ContainerAbilities>
                            ))}
                        </Abilities>
                    </ContainerDetails>
                </CardBack>
            </CardInner>
        </ContainerCard>
    );
};


const getBackgroundColor = (types: string[]): string => {
    const typeColors: Record<string, string> = {
        normal: "rgba(169, 169, 169, 0.7)",
        fire: "rgba(255, 69, 0, 0.7)", 
        water: "rgba(30, 144, 255, 0.7)", 
        grass: "rgba(34, 139, 34, 0.7)", 
        electric: "rgba(229, 200, 12, 0.934)", 
        ice: "rgba(173, 216, 230, 0.7)", 
        fighting: "rgba(255, 0, 0, 0.7)", 
        poison: "rgba(128, 0, 128, 0.7)", 
        ground: "rgba(139, 69, 19, 0.7)", 
        flying: "rgba(135, 206, 235, 0.7)", 
        psychic: "rgba(255, 105, 180, 0.7)", 
        bug: "rgba(10, 200, 10, 0.877)", 
        rock: "rgba(139, 137, 137, 0.7)", 
        ghost: "rgba(138, 43, 226, 0.7)", 
        dragon: "rgba(0, 0, 255, 0.7)", 
        dark: "rgba(0, 0, 0, 0.7)", 
        steel: "rgba(192, 192, 192, 0.7)", 
        fairy: "rgba(255, 182, 193, 0.7)",
    };

    for (const type of types) {
        if (typeColors[type]) {
            return typeColors[type];
        }
    }

    return "rgba(169, 169, 169, 0.7)";  // Default color if no match
};
