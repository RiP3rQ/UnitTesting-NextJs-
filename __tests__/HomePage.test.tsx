import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import exp from "constants";

describe("Home Page - Rendering", () => {
  it("should have Home Page Text", () => {
    render(<Home />); // ARRANGE

    const text = screen.getByText("Home Page"); // ACTION

    expect(text).toBeInTheDocument(); // ASSERTION
  });

  it("should have a button with text Click Me", () => {
    render(<Home />); // ARRANGE

    const button = screen.getByRole("button"); // ACTION

    expect(button).toBeInTheDocument(); // ASSERTION
    expect(button).toHaveTextContent("Click Me"); // ASSERTION
  });
});
