import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from '../../../presentation/atoms/button/button';

describe("Button component", () => {
  it("renders correctly", () => {
    render(<Button children="Click me" bgColor='white'onClick={()=>console.log()}/>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn(); 
    render(<Button children="Click me" onClick={handleClick} />);
    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});