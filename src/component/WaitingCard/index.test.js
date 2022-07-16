import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";
import CardDisplay from "./index";

// End goal: Test the button component

// Test that the button renders successfully
// start the test

test("tests whether the compnent renders successfuly",
function(){
    render(<Button/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("Click button success",
   function(){
    const handleClick = jest.fn()
    render(<Button handleClick={handleClick} />)

    const button = screen.getByRole("button");

    userEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
});
// End goal: Test the input component

// test('renders learn react link', () => {
//     render(<CardDisplay/>);
//     const room = screen.getByText(/room/i);
//     expect(room).toBeInTheDocument();
//   });
