import { render, screen } from "@testing-library/react";
import { ImgProps } from "../../../presentation/atoms/img/Img.interface";
import { Img } from "../../../presentation/atoms/img/Img";

describe("Img component", () => {
  it("renders correctly with provided props", () => {
    const props: ImgProps = {
      src: "https://example.com/pokemon.png",
      height: "200px",
      width: "200px",
    };

    render(<Img {...props} />);

    const imgElement = screen.getByAltText("poke img");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", props.src);
    expect(imgElement).toHaveAttribute("height", props.height);
    expect(imgElement).toHaveAttribute("width", props.width);
  });

  it("renders with default alt text", () => {
    const props: ImgProps = {
      src: "https://example.com/default.png",
      height: "150px",
      width: "150px",
    };

    render(<Img {...props} />);

    const imgElement = screen.getByAltText("poke img");

    expect(imgElement).toHaveAttribute("alt", "poke img");
  });
});
