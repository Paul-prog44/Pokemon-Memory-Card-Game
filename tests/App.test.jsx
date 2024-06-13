import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", {name : "Memory card game - Pokemon"}))
  });
});