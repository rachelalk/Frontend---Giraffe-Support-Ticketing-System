import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Popup from "./index.js";

test("Ask button is rendered when page is loaded", () => {
    // ARRANGE
    render(<Popup />)
    // ACT
    const askButton = screen.getByText(/Ask/i)
    // ASSERT
    expect(askButton).toBeInTheDocument()
});

test("Popup is displayed when ask button is clicked", () => {
  // ARRANGE
  render(<Popup />);
  // ACT
  const askButton = screen.getByText(/Ask/i);
  // ASSERT
  expect(askButton).toBeInTheDocument();
});

