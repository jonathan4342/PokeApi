import { render, screen } from "@testing-library/react";
import pokemonImage from "../../../assets/nofound.png";
import { NotFound } from "../../../presentation/atoms/nofound/NoFound";

describe("NotFound component", () => {
    it("renders the image and the message", () => {
        render(<NotFound />);

        const imgElement = screen.getByAltText("poke img");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", pokemonImage);
        expect(imgElement).toHaveAttribute("height", "20rem");
        expect(imgElement).toHaveAttribute("width", "20rem");

        const messageElement = screen.getByText(/No hay más pokemones/i);
        expect(messageElement).toBeInTheDocument();
    });
});
