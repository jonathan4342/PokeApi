import { useState } from "react";
import { Img } from "../img/Img"
import { CardProps } from "./Card.interface"
import { Abilities, ContainerAbilities, ContainerCard, ContainerDetails, ContainerImage } from "./Card.style"

export const Card = ({details}:CardProps)=>{
    const [isSelected, setIsSelected] = useState(false);
    const types = details.getTypes();
    const backgroundColor = getBackgroundColor(types);

    const handleClick = () => {
        setIsSelected(!isSelected); 
    };
    return(
        <ContainerCard
            role="button"
            border={backgroundColor}
            onClick={handleClick} 
        >
            {!isSelected?
            <>
            <ContainerImage backgroundColor={backgroundColor}>
                <Img src={details.getImage()} height="15rem" width="15rem" />
            </ContainerImage>
            <h1>{details.getName()}</h1>
            </>
            :(
                <ContainerDetails backgroundColor={backgroundColor}>
                    <p>Altura : {details.getHeight()/ 10} M</p>
                    <p>Peso :  {details.getWeight() / 10 } Kg</p>
                    <p>Habilidades: </p>
                    <Abilities>
                        {details.getAbilities().map(e=><ContainerAbilities border={backgroundColor}>{e}</ContainerAbilities>)}
                    </Abilities>
                    
                </ContainerDetails>
            )}
        </ContainerCard>
    )
}

const getBackgroundColor = (types: string[]): string => {
    const typeColors: Record<string, string> = {
        fire: "rgba(255, 69, 0, 0.7)", 
        water: "rgba(30, 144, 255, 0.7)", 
        grass: "rgba(34, 139, 34, 0.7)", 
        electric: "rgba(255, 255, 0, 0.7)", 
    };

    for (const type of types) {
        if (typeColors[type]) {
            return typeColors[type];
        }
    }

    return "rgba(169, 169, 169, 0.7)"; 
};