import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Popup from "./index.js";


test("Button rendering within popup box", () => {    
    // ARRANGE    
    render(<Popup />)    
    // ACT    
    const askButton = screen.getByText("Ask")    
    // ASSERT    
    expect(askButton).toBeInTheDocument()});

    test("handleClick functioning", () => {    
        const handleClick = jest.fn();   
        render(<Popup buttonHandleClick={handleClick}/>)    
        // ACT    
        const askButton = screen.getByText(/Submit/i)    
        // ASSERT    
        userEvent.click(askButton)
        expect(handleClick).toHaveBeenCalled()});