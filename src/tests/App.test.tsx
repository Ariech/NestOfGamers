import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    const headline = screen.getByText(/Hello world!/i);
    expect(headline).toBeInTheDocument();
  });
});
