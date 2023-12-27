import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  describe("Rendering", () => {
    it("should have Home Page Text", () => {
      render(<Home />); // ARRANGE

      const text = screen.getByText("Home Page"); // ACTION

      expect(text).toBeInTheDocument(); // ASSERTION
    });

    it("should have a button with text Click Me", () => {
      render(<Home />);

      // const button = screen.getByRole("button");

      // expect(button).toBeInTheDocument();
      // expect(button).toHaveTextContent("Click Me");

      expect(
        screen.getByRole("button", { name: "Click Me" })
      ).toBeInTheDocument();
    });

    it("should have input field with label: Enter Random Text", () => {
      render(<Home />);
      const label = screen.getByTestId("random_test_label");
      const input = screen.getByTestId("random_test_text");
      expect(label).toHaveTextContent("Enter Random Text:");
      expect(input).toBeInTheDocument();
    });

    it("should have input with placeholder", () => {
      render(<Home />);
      const input = screen.getByPlaceholderText(/search/i);
      expect(input).toBeInTheDocument();
    });

    it("should have input with value", () => {
      render(<Home />);
      const input = screen.getByDisplayValue(/audi q5/i);
      expect(input).toBeInTheDocument();
    });

    it("should not find element with text: This is the text!", () => {
      render(<Home />);

      expect(screen.queryByText("This is the text!")).not.toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("should click on Show Text button and find new text", async () => {
      render(<Home />);
      const button = screen.getByRole("button", { name: "Show Text" });
    });
  });
});
